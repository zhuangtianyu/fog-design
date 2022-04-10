import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Button from '@components/button';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import PanelCell, { CellType } from '../panel-cell';
import { timestampToDate } from '../../utils';
import '../../panel.less';
import './index.less';

const { prefix } = namespace;

interface MonthPanelProps  {
  value: number;
  list: CellType[];
  onLastYearClick: () => void;
  onNextYearClick: () => void;
  onYearClick: () => void;
  onCellClick: (value: number) => void;
  renderFooter?: (clickHandler: (value: number) => void) => React.ReactElement;
}

const MonthPanel: React.FC<MonthPanelProps> = props => {
  const {
    value,
    list,
    onLastYearClick,
    onNextYearClick,
    onYearClick,
    onCellClick,
    renderFooter,
  } = props;

  return (
    <div className={classnames(
      `${prefix}-date-picker__panel`,
      `${prefix}-date-picker__month-panel`,
    )}>
      <div className={`${prefix}-date-picker__header`}>
        <div className={`${prefix}-date-picker__trigger`} onClick={onLastYearClick}>
          <Icon type="double-left" />
        </div>
        <div className={`${prefix}-date-picker__overview`}>
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
        <div className={`${prefix}-date-picker__trigger`} onClick={onNextYearClick}>
          <Icon type="double-right" />
        </div>
      </div>
      <div className={`${prefix}-date-picker__body`}>
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

MonthPanel.defaultProps = {};

export default MonthPanel;
