import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Trigger, { TriggerProps } from '@components/trigger/index';
import './index.less';

const { prefix } = namespace;

export interface TooltipProps extends TriggerProps  {
  popupClassName?: string;
  children?: React.ReactElement;
  content?: React.ReactChild;
}

export const Tooltip: React.FC<TooltipProps> = props => {
  const {
    popupClassName,
    children,
    content,
    ...restProps
  } = props;

  return (
    <Trigger
      popupClassName={classnames(`${prefix}-tooltip`, popupClassName)}
      popup={<>{content}</>}
      {...restProps}
    >
      {children}
    </Trigger>
  );
};

Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'top',
  showArrow: true,
};

export default Tooltip;
