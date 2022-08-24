import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { getWrappedChildren } from '@utils/index';
import Trigger, { TriggerProps } from '@components/trigger/index';
import './index.less';

const { prefix } = namespace;

export interface TooltipProps extends Omit<TriggerProps, 'children'> {
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

  const wrappedChildren = useMemo(() => getWrappedChildren({
    children,
    wrapperType: 'span',
    wrapperProps: { className: `${prefix}-tooltip__trigger` },
  }), [children]);

  return (
    <Trigger
      popupClassName={classnames(`${prefix}-tooltip`, popupClassName)}
      popup={content}
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
