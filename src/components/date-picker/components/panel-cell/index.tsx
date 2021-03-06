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
  preset?: boolean;
  picked?: boolean;
  pickedFirstChild?: boolean;
  pickedLastChild?: boolean;
  pickedIsolated?: boolean;
  presetFirstChild?: boolean;
  presetLastChild?: boolean;
  presetIsolated?: boolean;
  picking?: boolean;
  pickingFirstChild?: boolean;
  pickingLastChild?: boolean;
  pickingIsolated?: boolean;
  content: React.ReactChild;
}

export interface PanelCellProps extends CellType {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
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
    preset,
    presetFirstChild,
    presetLastChild,
    presetIsolated,
    picked,
    pickedFirstChild,
    pickedLastChild,
    pickedIsolated,
    picking,
    pickingFirstChild,
    pickingLastChild,
    pickingIsolated,
    content,
    onClick,
    onMouseEnter,
    onMouseLeave,
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
        [`${prefix}-date-picker__cell--preset`]: preset,
        [`${prefix}-date-picker__cell--preset-first-child`]: presetFirstChild,
        [`${prefix}-date-picker__cell--preset-last-child`]: presetLastChild,
        [`${prefix}-date-picker__cell--preset-isolated-child`]: presetIsolated,
        [`${prefix}-date-picker__cell--picked`]: picked,
        [`${prefix}-date-picker__cell--picked-first-child`]: pickedFirstChild,
        [`${prefix}-date-picker__cell--picked-last-child`]: pickedLastChild,
        [`${prefix}-date-picker__cell--picked-isolated-child`]: pickedIsolated,
        [`${prefix}-date-picker__cell--picking`]: picking,
        [`${prefix}-date-picker__cell--picking-first-child`]: pickingFirstChild,
        [`${prefix}-date-picker__cell--picking-last-child`]: pickingLastChild,
        [`${prefix}-date-picker__cell--picking-isolated-child`]: pickingIsolated,
      })}
      key={value}
      title={title}
      onClick={event => {
        event.stopPropagation();
        onClick(event);
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${prefix}-date-picker__cell-content`}>
        {content}
      </div>
      {preset && (
        <div
          className={classnames([
            `${prefix}-date-picker__cell-background`,
            `${prefix}-date-picker__cell-background--preset`,
          ])}
        />
      )}
      {picked && (
        <div
          className={classnames([
            `${prefix}-date-picker__cell-background`,
            `${prefix}-date-picker__cell-background--picked`,
          ])}
        />
      )}
      {picking && (
        <div
          className={classnames([
            `${prefix}-date-picker__cell-background`,
            `${prefix}-date-picker__cell-background--picking`,
          ])}
        />
      )}
    </div>
  );
};

export default PanelCell;
