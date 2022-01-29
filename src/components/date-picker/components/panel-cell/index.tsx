import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

const { prefix } = namespace;

export interface CellType {
  value: number;
  title: string;
  active: boolean;
  within: boolean;
  disabled: boolean;
  disabledFirstChild: boolean;
  disabledLastChild: boolean;
  disabledIsolated: boolean;
  content: React.ReactChild;
}

export interface PanelCellProps extends CellType {
  onClick: () => void;
};

const PanelCell: React.FC<PanelCellProps> = props => {
  const {
    value,
    title,
    active,
    within,
    disabled,
    disabledFirstChild,
    disabledLastChild,
    disabledIsolated,
    content,
    onClick,
  } = props;

  return (
    <div
      className={classnames({
        [`${prefix}-date-picker__cell`]: true,
        [`${prefix}-date-picker__cell--active`]: active,
        [`${prefix}-date-picker__cell--within`]: within,
        [`${prefix}-date-picker__cell--disabled`]: disabled,
        [`${prefix}-date-picker__cell--disabled-first-child`]: disabledFirstChild,
        [`${prefix}-date-picker__cell--disabled-last-child`]: disabledLastChild,
        [`${prefix}-date-picker__cell--disabled-isolated`]: disabledIsolated,
      })}
      key={value}
      title={title}
      onClick={onClick}
    >
      <div className={`${prefix}-date-picker__cell-content`}>
        {content}
      </div>
    </div>
  );
};

export default PanelCell;
