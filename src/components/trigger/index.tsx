import * as React from 'react';
import { useState, useEffect, useLayoutEffect, useMemo, useRef, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import namespace from '@namespace';
import classnames from 'classnames';
import Transition, { TransitionProps } from '@components/transition';
import useControlled from '@hooks/useControlled';
import { POPUP_DEFAULT_MARGIN, ARROW_MARGIN, PLACEMENT_MAP } from './constants';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

const { createPortal } = ReactDOM;

const propertyIncludes = (property, value) =>
  Array.isArray(property) ? property.includes(value) : property === value;

const getTriggerClassName = children =>
  classnames(`${prefix}-trigger`, React.Children.only(children).props.className);

type TriggerType = 'click' | 'hover';

type TriggerTypes = TriggerType | TriggerType[];

type TriggerPlacement =
  'topLeft' | 'top' | 'topRight' |
  'leftTop' | 'left' | 'leftBottom' |
  'rightTop' | 'right' | 'rightBottom' |
  'bottomLeft' | 'bottom' | 'bottomRight';

export interface TriggerProps {
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  trigger?: TriggerTypes;
  popup?: React.ReactChild;
  popupClassName?: string;
  popupTransitionProps?: TransitionProps;
  popupMinWidthFromTrigger?: boolean;
  children?: React.ReactElement;
  disabled?: boolean;
  placement?: TriggerPlacement;
  showArrow?: boolean;
  getPopupMountNode?: () => HTMLElement;
}

export const Trigger: React.FC<TriggerProps> = props => {
  const {
    visible: visibleFromProps,
    defaultVisible: defaultVisibleFromProps,
    onVisibleChange: onVisibleChangeFromProps,
    placement: placementFromProps,
    trigger,
    popup,
    popupClassName,
    popupTransitionProps,
    popupMinWidthFromTrigger,
    children,
    disabled,
    showArrow,
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
      const {
        onMouseEnter: onMouseEnterFromChildren,
        onMouseLeave: onMouseLeaveFromChildren,
      } = React.Children.only(children).props;

      const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        onVisibleChange(true);
        isFunction(onMouseEnterFromChildren) && onMouseEnterFromChildren(event);
      };

      const onMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        onVisibleChange(false);
        isFunction(onMouseLeaveFromChildren) && onMouseLeaveFromChildren(event);
      };

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

  const placement = useMemo(() => PLACEMENT_MAP[placementFromProps]
    ? placementFromProps
    : Trigger.defaultProps.placement
  , [placementFromProps]);

  const popupHotStyle = useMemo(() => {
    const baseStyle = {
      top: -POPUP_DEFAULT_MARGIN,
      right: -POPUP_DEFAULT_MARGIN,
      bottom: -POPUP_DEFAULT_MARGIN,
      left: -POPUP_DEFAULT_MARGIN,
    };

    const arrowStyle = showArrow
      ? { [PLACEMENT_MAP[placement].arrowDirection]: -ARROW_MARGIN }
      : undefined;

    return { ...baseStyle, ...arrowStyle };
  }, [placement, showArrow]);

  const updatePopupPosition = () => {
    setTimeout(() => {
      if (containerNode && triggerRef.current && popupRef.current) {
        const POPUP_MARGIN = showArrow ? ARROW_MARGIN : POPUP_DEFAULT_MARGIN;

        const {
          x: triggerRefX,
          y: triggerRefY,
          width: triggerWidth,
          height: triggerHeight,
        } = triggerRef.current.getBoundingClientRect();

        if (popupMinWidthFromTrigger) {
          popupRef.current.style.minWidth = `${triggerWidth}px`;
        }

        const {
          x: containerNodeX,
          y: containerNodeY,
        } = containerNode.getBoundingClientRect();

        const popupRefStyle = getComputedStyle(popupRef.current);
        const popupWidth = Number(popupRefStyle.width.replace('px', ''));
        const popupHeight = Number(popupRefStyle.height.replace('px', ''));

        let popupTop;
        let popupLeft;

        switch (placement) {
          case 'topLeft':
            popupTop = triggerRefY - containerNodeY - popupHeight - POPUP_MARGIN;
            popupLeft = triggerRefX - containerNodeX;
            break;
          case 'top':
            popupTop = triggerRefY - containerNodeY - popupHeight - POPUP_MARGIN;
            popupLeft = triggerRefX - containerNodeX + 0.5 * triggerWidth - 0.5 * popupWidth;
            break;
          case 'topRight':
            popupTop = triggerRefY - containerNodeY - popupHeight - POPUP_MARGIN;
            popupLeft = triggerRefX - containerNodeX + triggerWidth - popupWidth;
            break;
          case 'leftTop':
            popupTop = triggerRefY - containerNodeY;
            popupLeft = triggerRefX - containerNodeX - popupWidth - POPUP_MARGIN;
            break;
          case 'left':
            popupTop = triggerRefY - containerNodeY + 0.5 * triggerHeight - 0.5 * popupHeight;
            popupLeft = triggerRefX - containerNodeX - popupWidth - POPUP_MARGIN;
            break;
          case 'leftBottom':
            popupTop = triggerRefY - containerNodeY + triggerHeight - popupHeight;
            popupLeft = triggerRefX - containerNodeX - popupWidth - POPUP_MARGIN;
            break;
          case 'rightTop':
            popupTop = triggerRefY - containerNodeY;
            popupLeft = triggerRefX - containerNodeX + triggerWidth + POPUP_MARGIN;
            break;
          case 'right':
            popupTop = triggerRefY - containerNodeY + 0.5 * triggerHeight - 0.5 * popupHeight;
            popupLeft = triggerRefX - containerNodeX + triggerWidth + POPUP_MARGIN;
            break;
          case 'rightBottom':
            popupTop = triggerRefY - containerNodeY + triggerHeight - popupHeight;
            popupLeft = triggerRefX - containerNodeX + triggerWidth + POPUP_MARGIN;
            break;
          case 'bottomLeft':
            popupTop = triggerRefY - containerNodeY + triggerHeight + POPUP_MARGIN;
            popupLeft = triggerRefX - containerNodeX;
            break;
          case 'bottom':
            popupTop = triggerRefY - containerNodeY + triggerHeight + POPUP_MARGIN;
            popupLeft = triggerRefX - containerNodeX + 0.5 * triggerWidth - 0.5 * popupWidth;
            break;
          case 'bottomRight':
            popupTop = triggerRefY - containerNodeY + triggerHeight + POPUP_MARGIN;
            popupLeft = triggerRefX - containerNodeX + triggerWidth - popupWidth;
            break;
        }

        popupRef.current.style.top = `${popupTop}px`;
        popupRef.current.style.left = `${popupLeft}px`;
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

      document.addEventListener('click', handleClick);

      return () => document.removeEventListener('click', handleClick);
    }
  }, [visible, containerNode, trigger, onVisibleChange]);

  useLayoutEffect(() => {
    if (visible && containerNode) {
      let triggerObserver;
      let popupObserver;

      if (ResizeObserver) {
        if (triggerRef.current) {
          const resizeObserver = new ResizeObserver(updatePopupPosition);

          triggerObserver = resizeObserver.observe(triggerRef.current);
        }

        if (popupRef.current) {
          const resizeObserver = new ResizeObserver(updatePopupPosition);

          popupObserver = resizeObserver.observe(popupRef.current);
        }

        return () => {
          triggerObserver && triggerObserver.disconnect();
          popupObserver && popupObserver.disconnect();
        };
      } else {
        updatePopupPosition();
      }
    }
  }, [visible, containerNode]);

  if (disabled) return (
    cloneElement(React.Children.only(children), {
      className: getTriggerClassName(children),
      disabled,
    })
  );

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
              style={{ transformOrigin: PLACEMENT_MAP[placement].transformOrigin }}
              ref={popupRef}
              {...mouseEvents}
            >
              {showArrow && (
                <div
                  className={`${prefix}-trigger__popup-arrow`}
                  style={{ ...PLACEMENT_MAP[placement].arrowStyle }}
                />
              )}
              <div
                className={`${prefix}-trigger__popup-hot`}
                style={popupHotStyle}
              />
              <div className={`${prefix}-trigger__popup-content`}>
                {popup}
              </div>
            </div>
          </Transition>
        ), containerNode)
      }
    </>
  );
};

Trigger.defaultProps = {
  trigger: 'click',
  placement: 'bottomLeft',
  popupTransitionProps: {},
  getPopupMountNode: () => document.body,
};

export default Trigger;
