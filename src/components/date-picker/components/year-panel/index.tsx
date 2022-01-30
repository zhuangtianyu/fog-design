import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Button from '@components/button';
import Icon from '../../icon';
import { isFunction } from '@utils/index';
import PanelCell, { CellType } from '../panel-cell';
import { timestampToDate } from '../../utils';
import '../../panel.less';
import './index.less';

const { prefix } = namespace;

interface YearPanelProps  {
  list: CellType[];
  onLastGroupClick: () => void;
  onNextGroupClick: () => void;
  onYearClick: () => void;
  onCellClick: (value: number) => void;
  renderFooter?: (clickHandler: (value: number) => void) => React.ReactElement;
}

const YearPanel: React.FC<YearPanelProps> = props => {
  const {
    list,
    onLastGroupClick,
    onNextGroupClick,
    onYearClick,
    onCellClick,
    renderFooter,
  } = props;

  return (
    <div className={classnames(
      `${prefix}-date-picker__panel`,
      `${prefix}-date-picker__year-panel`,
    )}>
      <div className={`${prefix}-date-picker__header`}>
        <div className={`${prefix}-date-picker__trigger`} onClick={onLastGroupClick}>
          <Icon type="double-left" />
        </div>
        <div className={`${prefix}-date-picker__overview`}>
          <Button
            className={`${prefix}-date-picker__overview-item`}
            type="text"
            onClick={onYearClick}
          >
            {timestampToDate(list[0].value).YYYY}
            -
            {timestampToDate(list[list.length - 1].value).YYYY}
          </Button>
        </div>
        <div className={`${prefix}-date-picker__trigger`} onClick={onNextGroupClick}>
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

YearPanel.defaultProps = {};

export default YearPanel;
