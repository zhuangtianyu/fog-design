import React, { useState, useEffect, useLayoutEffect, useMemo, useRef, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import namespace from '@namespace';
import classnames from 'classnames';
import Transition from '@components/transition';
import useControlled from '@hooks/useControlled';
import './index.less';

const { prefix } = namespace;
const { createPortal } = ReactDOM;

const propertyIncludes = (property, value) =>
  Array.isArray(property) ? property.includes(value) : property === value;

type TriggerType = 'click' | 'hover';
type Trigger = TriggerType | TriggerType[];

interface TriggerProps {
  className?: string;
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  trigger?: Trigger;
  popup?: React.ReactElement;
  children?: React.ReactElement;
  getPopupMountNode?: () => HTMLElement;
}

const Trigger: React.FC<TriggerProps> = props => {
  const {
    className,
    visible: visibleFromProps,
    defaultVisible: defaultVisibleFromProps,
    onVisibleChange: onVisibleChangeFromProps,
    trigger,
    popup,
    children,
    getPopupMountNode,
  } = props;

  const {
    value: visible,
    onChange: onVisibleChange,
  } = useControlled({
    value: visibleFromProps,
    defaultValue: defaultVisibleFromProps,
    onChange: onVisibleChangeFromProps,
  });

  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  const [containerNode, setContainerNode] = useState<HTMLElement | null>(null);

  const triggerRefDefault = useRef<HTMLElement>(null);

  const triggerRef = useMemo(() => {
    const childrenRef = React.Children.only(children as any).ref;

    return childrenRef ?? triggerRefDefault;
  }, [children]);

  const triggerClassName = useMemo(() => {
    const { props: childrenProps } = React.Children.only(children);

    return classnames(childrenProps.className, `${prefix}-trigger`);
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
    const nextMountNode = getPopupMountNode();

    nextMountNode && setMountNode(nextMountNode);
  }, [getPopupMountNode]);

  useEffect(() => {
    if (mountNode) {
      const container: HTMLDivElement = document.createElement('div');

      container.style.position = 'absolute';
      container.style.top = '0px';
      container.style.left = '0px';
      container.style.width = '100%';

      mountNode.appendChild(container);
      setContainerNode(container);
    }
  }, [mountNode]);

  useEffect(() => {
    if (mountNode && containerNode) {
      return () => mountNode.removeChild(containerNode);
    }

    return () => {};
  }, [mountNode, containerNode]);

  useLayoutEffect(() => {
    if (containerNode) {
      setTimeout(() => {
        if (triggerRef.current && popupRef.current) {
          const { x: triggerRefX, y: triggerRefY, width, height } = triggerRef.current.getBoundingClientRect();
          const { x: containerNodeX, y: containerNodeY } = containerNode.getBoundingClientRect();

          popupRef.current.style.left = `${triggerRefX - containerNodeX}px`;
          popupRef.current.style.top = `${triggerRefY - containerNodeY + height + 4}px`;
          popupRef.current.style.minWidth = `${width}px`;
        }
      });
    }
  }, [visible, containerNode]);

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

      document.addEventListener('click', handleClick);

      return () => document.removeEventListener('click', handleClick);
    }
  }, [visible, containerNode, trigger]);

  return (
    <>
      {
        children &&
        cloneElement(React.Children.only(children), {
          ref: triggerRef,
          className: triggerClassName,
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
          >
            <div
              className={classnames(`${prefix}-trigger__popup`, className)}
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
  getPopupMountNode: () => document.body,
};

export default Trigger;
