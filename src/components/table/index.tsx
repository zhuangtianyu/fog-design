import * as React from 'react';
import { useState, useLayoutEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useArray from '@hooks/useArray';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = string | number;

export type FixedType = 'left' | 'right';

export interface RowType {
  [propName: string]: any;
}

export interface ColumnType {
  key: string;
  name: string;
  width?: string | number;
  fixed?: FixedType;
  render?: (value: ValueType, row: RowType, index: number) => React.ReactNode;
}

export interface TableProps {
  /** --skip */
  className?: string;
  data?: RowType[];
  rowKey?: string;
  columns?: ColumnType[];
  contentWidth?: string | number;
}

export type ThRefs = Record<string, React.RefObject<HTMLTableCellElement>>;

export type FixedStyles = Record<string, React.CSSProperties>;

const isUsableFixed = fixed => ['left', 'right'].includes(fixed);

export const Table: React.FC<TableProps> = props => {
  const {
    className,
    rowKey,
    contentWidth,
    data: dataFromProps,
    columns: columnsFromProps,
  } = props;

  const contentRef = useRef<HTMLDivElement>(null);

  const [fixedStyles, setFixedStyles] = useState<FixedStyles>({});

  const [isScrollLeftEnd, setIsScrollLeftEnd] = useState(false);

  const [isScrollRightEnd, setIsScrollRightEnd] = useState(false);

  const columns = useMemo(() => {
    if (!Array.isArray(columnsFromProps)) return [];

    return columnsFromProps.map(column => ({
      ...column,
      fixed: isUsableFixed(column.fixed) ? column.fixed : undefined,
    }));
  }, [columnsFromProps]);

  const data = useArray<RowType[]>(dataFromProps);

  const thRefs = useMemo<ThRefs>(() =>
    columns.reduce((accumulator, column) => ({
      ...accumulator,
      [column.key]: React.createRef(),
    }), {})
  , [columns]);

  const leftFixedKeys = useMemo(() =>
    columns
      .filter(column => column.fixed === 'left')
      .map(column => column.key)
  , [columns]);

  const rightFixedKeys = useMemo(() =>
    columns
      .filter(column => column.fixed === 'right')
      .map(column => column.key)
  , [columns]);

  const isFixedLast = key => leftFixedKeys.length && leftFixedKeys[leftFixedKeys.length - 1] === key;

  const isFixedFirst = key => rightFixedKeys.length && rightFixedKeys[0] === key;

  const tableScrollHandler = () => {
    if (contentRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = contentRef.current;

      setIsScrollLeftEnd(scrollLeft === 0);
      setIsScrollRightEnd(scrollLeft + clientWidth === scrollWidth);
    }
  };

  const updateColumnsLayout = () => {
    const nextFixedStyles = {};

    let leftOffset = 0;
    let rightOffset = 0;

    leftFixedKeys.forEach(key => {
      if (thRefs[key].current) {
        nextFixedStyles[key] = { left: leftOffset };
        leftOffset += thRefs[key].current.offsetWidth;
      }
    });

    rightFixedKeys.reverse().forEach(key => {
      if (thRefs[key].current) {
        nextFixedStyles[key] = { right: rightOffset };
        rightOffset += thRefs[key].current.offsetWidth;
      }
    });

    setFixedStyles(nextFixedStyles);
    tableScrollHandler();
  };

  useLayoutEffect(() => {
    if (ResizeObserver) {
      const observers = [];

      Object.keys(thRefs).forEach(key => {
        const observer = new ResizeObserver(updateColumnsLayout);

        observer.observe(thRefs[key].current);
        observers.push(observer);
      });

      return () => observers.forEach(observer => observer.disconnect());
    }
  }, [thRefs]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', tableScrollHandler);

      return () => contentRef.current.removeEventListener('scroll', tableScrollHandler);
    }
  }, []);

  return (
    <div
      className={classnames(className, {
        [`${prefix}-table`]: true,
        [`${prefix}-table--scroll-left-end`]: isScrollLeftEnd,
        [`${prefix}-table--scroll-right-end`]: isScrollRightEnd,
      })}
    >
      <div
        className={`${prefix}-table__content`}
        ref={contentRef}
      >
        <table width={contentWidth}>
          <thead className={`${prefix}-table__thead`}>
            <tr className={`${prefix}-table__tr`}>
              {columns.map(column => {
                const { key, fixed } = column;

                return (
                  <th
                    className={classnames({
                      [`${prefix}-table__cell`]: true,
                      [`${prefix}-table__cell--fixed`]: fixed,
                      [`${prefix}-table__cell--fixed-last`]: isFixedLast(key),
                      [`${prefix}-table__cell--fixed-first`]: isFixedFirst(key),
                    })}
                    key={key}
                    ref={thRefs[key]}
                    style={fixedStyles[key] || {}}
                  >
                    {column.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className={`${prefix}-table__tbody`}>
            {data.map((row, index) => (
              <tr className={`${prefix}-table__tr`} key={rowKey || index}>
                {columns.map(column => {
                  const { key, width, fixed, render } = column;

                  return (
                    <td
                      className={classnames({
                        [`${prefix}-table__cell`]: true,
                        [`${prefix}-table__cell--fixed`]: fixed,
                        [`${prefix}-table__cell--fixed-last`]: isFixedLast(key),
                        [`${prefix}-table__cell--fixed-first`]: isFixedFirst(key),
                      })}
                      key={key}
                      width={width}
                      style={fixedStyles[key] || {}}
                    >
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
      </div>
    </div>
  );
};

Table.defaultProps = {};

export default Table;
