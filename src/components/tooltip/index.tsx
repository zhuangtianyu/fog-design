import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Trigger, { TriggerProps } from '@components/trigger/index';
import './index.less';

const { prefix } = namespace;

export interface TooltipProps extends Omit<TriggerProps, 'children'>  {
  popupClassName?: string;
  children?: React.ReactChild | React.ReactChild[];
  content?: React.ReactChild;
}

export const Tooltip: React.FC<TooltipProps> = props => {
  const {
    popupClassName,
    children,
    content,
    ...restProps
  } = props;

  const wrappedChildren = useMemo(() => {
    const childrenIsArray = Array.isArray(children);
    const childrenIsFragment = !childrenIsArray && (children as React.ReactElement).type === React.Fragment;

    const shouldWrap =
      childrenIsArray ||
      childrenIsFragment ||
      typeof children === 'string' ||
      typeof children === 'number';

    if (shouldWrap) return (
      <span className={`${prefix}-tooltip__trigger`}>
        {children}
      </span>
    );

    return children;
  }, [children]);

  return (
    <Trigger
      popupClassName={classnames(`${prefix}-tooltip`, popupClassName)}
      popup={<>{content}</>}
      {...restProps}
    >
      {wrappedChildren}
    </Trigger>
  );
};

Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'top',
  showArrow: true,
};

export default Tooltip;
