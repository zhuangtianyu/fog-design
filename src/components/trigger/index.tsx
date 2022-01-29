import React, { useState, useEffect, useLayoutEffect, useMemo, useRef, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import namespace from '@namespace';
import classnames from 'classnames';
import Transition, { TransitionProps } from '@components/transition';
import useControlled from '@hooks/useControlled';
import './index.less';

const { prefix } = namespace;

const { createPortal } = ReactDOM;

const propertyIncludes = (property, value) =>
  Array.isArray(property) ? property.includes(value) : property === value;

const getTriggerClassName = children =>
  classnames(`${prefix}-trigger`, React.Children.only(children).props.className);

type TriggerType = 'click' | 'hover';
type Trigger = TriggerType | TriggerType[];

interface TriggerProps {
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  trigger?: Trigger;
  popup?: React.ReactElement;
  popupClassName?: string;
  popupTransitionProps?: TransitionProps;
  children?: React.ReactElement;
  getPopupMountNode?: () => HTMLElement;
  disabled?: boolean;
}

const Trigger: React.FC<TriggerProps> = props => {
  const {
    visible: visibleFromProps,
    defaultVisible: defaultVisibleFromProps,
    onVisibleChange: onVisibleChangeFromProps,
    trigger,
    popup,
    popupClassName,
    popupTransitionProps,
    children,
    getPopupMountNode,
    disabled,
  } = props;

  const {
    value: visible,
    onChange: onVisibleChange,
  } = useControlled({
    value: visibleFromProps,
    defaultValue: defaultVisibleFromProps,
    onChange: onVisibleChangeFromProps,
  });

  if (disabled) return (
    cloneElement(React.Children.only(children), {
      className: getTriggerClassName(children),
      disabled,
    })
  );

  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const getNodeWithRaf = () => {
      window.requestAnimationFrame(() => {
        const nextMountNode = getPopupMountNode();

        nextMountNode
          ? setMountNode(nextMountNode)
          : getNodeWithRaf();
      });
    };

    getNodeWithRaf();
  }, [getPopupMountNode]);

  const containerNode = useMemo<HTMLElement | null>(() => {
    if (!mountNode) return null;

    const container: HTMLDivElement = document.createElement('div');

    container.style.position = 'absolute';
    container.style.top = '0px';
    container.style.left = '0px';
    container.style.width = '100%';

    mountNode.appendChild(container);

    return container;
  }, [mountNode]);

  const triggerRefDefault = useRef<HTMLElement>(null);

  const triggerRef = useMemo(() => {
    const childrenRef = React.Children.only(children as any).ref;

    return childrenRef ?? triggerRefDefault;
  }, [children]);

  const popupRef = useRef<HTMLDivElement>(null);

  const mouseEvents = useMemo(() => {
    if (propertyIncludes(trigger, 'hover')) {
      const onMouseEnter = () => onVisibleChange(true);
      const onMouseLeave = () => onVisibleChange(false);

      return { onMouseEnter, onMouseLeave };
    }

    return {};
  }, [trigger]);

  useEffect(() => {
    if (mountNode && containerNode) {
      return () => mountNode.removeChild(containerNode);
    }

    return () => {};
  }, [mountNode, containerNode]);

  const updatePopupPosition = () => {
    setTimeout(() => {
      if (containerNode && triggerRef.current && popupRef.current) {
        const { x: triggerRefX, y: triggerRefY, width, height } = triggerRef.current.getBoundingClientRect();
        const { x: containerNodeX, y: containerNodeY } = containerNode.getBoundingClientRect();

        popupRef.current.style.left = `${triggerRefX - containerNodeX}px`;
        popupRef.current.style.top = `${triggerRefY - containerNodeY + height + 4}px`;
        popupRef.current.style.minWidth = `${width}px`;
      }
    });
  };

  useEffect(() => {
    if (propertyIncludes(trigger, 'click')) {
      const handleClick = event => {
        const isClickTrigger = triggerRef.current?.contains(event.target);
        const isClickPopup = containerNode?.contains(event.target);

        // click inside
        if (isClickTrigger) return onVisibleChange(!visible);
        if (isClickPopup) return; // do nothing is this case

        // click outside
        visible && onVisibleChange(false); // switch visible to false
      };

      // handle click event in capture phase (in case of children updated)
      document.addEventListener('click', handleClick, true);

      return () => document.removeEventListener('click', handleClick, true);
    }
  }, [visible, containerNode, trigger]);

  useLayoutEffect(() => {
    if (visible && containerNode) {
      if (ResizeObserver && triggerRef.current) {
        const resizeObserver = new ResizeObserver(updatePopupPosition);

        resizeObserver.observe(triggerRef.current);

        return () => resizeObserver.disconnect();
      }

      updatePopupPosition();
    }
  }, [visible, containerNode]);

  return (
    <>
      {
        children &&
        cloneElement(React.Children.only(children), {
          ref: triggerRef,
          className: getTriggerClassName(children),
          ...mouseEvents,
        })
      }
      {
        containerNode &&
        createPortal((
          <Transition
            visible={visible}
            timeout={300}
            beforeEnter={`${prefix}-trigger__popup--before-enter`}
            entering={`${prefix}-trigger__popup--entering`}
            entered={`${prefix}-trigger__popup--entered`}
            leaving={`${prefix}-trigger__popup--leaving`}
            {...popupTransitionProps}
          >
            <div
              className={classnames(`${prefix}-trigger__popup`, popupClassName)}
              ref={popupRef}
              {...mouseEvents}
            >
              {popup}
            </div>
          </Transition>
        ), containerNode)
      }
    </>
  );
};

Trigger.defaultProps = {
  trigger: 'click',
  popupTransitionProps: {},
  getPopupMountNode: () => document.body,
};

export default Trigger;
