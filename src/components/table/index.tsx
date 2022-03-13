import React, { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = string | number;

export interface RowType {
  [propName: string]: any;
}

export interface ColumnType {
  key: string;
  name: string;
  render?: (value: ValueType, row: RowType, index: number) => React.ReactNode;
}

interface TableProps {
  className?: string;
  data?: RowType[];
  rowKey?: string;
  columns?: ColumnType[];
}

const Table: React.FC<TableProps> = props => {
  const {
    className,
    rowKey,
    data: dataFromProps,
    columns: columnsFromProps,
  } = props;

  const columns = useMemo<ColumnType[]>(() => Array.isArray(columnsFromProps) ? columnsFromProps : [], [columnsFromProps]);
  const data = useMemo<RowType[]>(() => Array.isArray(dataFromProps) ? dataFromProps : [], [dataFromProps]);

  return (
    <table className={classnames(`${prefix}-table`, className)}>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={rowKey || index}>
            {columns.map(column => {
              const { key, render } = column;

              return (
                <td key={key}>
                  {
                    isFunction(render)
                      ? render(row[key], row, index)
                      : row[key]
                  }
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.defaultProps = {};

export default Table;
