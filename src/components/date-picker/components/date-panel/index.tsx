import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Button from '@components/button';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import PanelCell, { CellType } from '../panel-cell';
import { DAYS, MONTHS, timestampToDate, getDayStartDate } from '../../utils';
import '../../panel.less';
import './index.less';

const { prefix } = namespace;

interface DatePanelProps  {
  className?: string;
  value: number;
  list: CellType[];
  onLastYearClick: () => void;
  onLastMonthClick: () => void;
  onNextMonthClick: () => void;
  onNextYearClick: () => void;
  onYearClick: () => void;
  onMonthClick: () => void;
  onCellClick: (value: number) => void;
  renderFooter?: (clickHandler: (value: number) => void) => React.ReactElement;
}

const DatePanel: React.FC<DatePanelProps> = props => {
  const {
    className,
    value,
    list,
    onLastYearClick,
    onLastMonthClick,
    onNextMonthClick,
    onNextYearClick,
    onYearClick,
    onMonthClick,
    onCellClick,
    renderFooter,
  } = props;

  return (
    <div className={classnames(
      `${prefix}-date-picker__panel`,
      `${prefix}-date-picker__date-panel`,
      className,
    )}>
      <div className={`${prefix}-date-picker__header`}>
        <div className={`${prefix}-date-picker__trigger`} onClick={onLastYearClick}>
          <Icon type="double-left" />
        </div>
        <div className={`${prefix}-date-picker__trigger`} onClick={onLastMonthClick}>
          <Icon type="left" />
        </div>
        <div className={`${prefix}-date-picker__overview`}>
          <Button
            className={`${prefix}-date-picker__overview-item`}
            type="link"
            onClick={event => {
              event.stopPropagation();
              onMonthClick();
            }}
          >
            {MONTHS[timestampToDate(value).monthIndex]}
          </Button>
          <Button
            className={`${prefix}-date-picker__overview-item`}
            type="link"
            onClick={event => {
              event.stopPropagation();
              onYearClick();
            }}
          >
            {timestampToDate(value).YYYY}
          </Button>
        </div>
        <div className={`${prefix}-date-picker__trigger`} onClick={onNextMonthClick}>
          <Icon type="right" />
        </div>
        <div className={`${prefix}-date-picker__trigger`} onClick={onNextYearClick}>
          <Icon type="double-right" />
        </div>
      </div>
      <div className={`${prefix}-date-picker__body`}>
        <div className={`${prefix}-date-picker__days`}>
          {DAYS.map(day => (
            <div className={`${prefix}-date-picker__day`} key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className={`${prefix}-date-picker__cells`}>
          {list.map(item => (
            <PanelCell
              key={item.value}
              onClick={() => !item.disabled && onCellClick(item.value)}
              {...item}
            />
          ))}
        </div>
      </div>
      {isFunction(renderFooter) && (
        <div className={`${prefix}-date-picker__footer`}>
          {renderFooter(onCellClick)}
        </div>
      )}
    </div>
  );
};

DatePanel.defaultProps = {
  renderFooter: clickHandler => (
    <Button
      type="link"
      onClick={() => clickHandler(getDayStartDate())}
    >
      Today
    </Button>
  ),
};

export default DatePanel;
