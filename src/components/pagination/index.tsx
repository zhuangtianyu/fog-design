import * as React from 'react';
import { useState, useRef, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import { isFunction } from '@utils/index';
import Button from '@components/button';
import Select from '@components/select';
import Icon from '@components/icon';
import InputNumber from '@components/input-number';
import './index.less';

const { prefix } = namespace;
const { Option } = Select;

const defaultPage = 1;
const defaultPageSize = 20;

export interface PaginationProps  {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  page?: number;
  pageSize?: number;
  defaultPage?: number;
  defaultPageSize?: number;
  total?: number;
  pageSizeOptions?: number[];
  disabled?: boolean;
  showJumper?: boolean;
  onChange?: (page: number, pageSize: number) => void;
}

export const Pagination: React.FC<PaginationProps> = props => {
  const {
    className,
    style,
    page: pageFromProps,
    pageSize: pageSizeFromProps,
    defaultPage: defaultPageFromProps,
    defaultPageSize: defaultPageSizeFromProps,
    total,
    pageSizeOptions,
    disabled,
    showJumper,
    onChange: onChangeFromProps,
  } = props;

  const [jumperPage, setJumperPage] = useState<number | null>(null);

  const onChange = useMemo(() =>
    isFunction(onChangeFromProps)
      ? onChangeFromProps
      : () => {}
  , [onChangeFromProps]);

  const {
    value: page = defaultPage,
    onChange: onPageChange,
  } = useControlled({
    value: pageFromProps,
    defaultValue: defaultPageFromProps,
  });

  const {
    value: pageSize = defaultPageSize,
    onChange: onPageSizeChange,
  } = useControlled({
    value: pageSizeFromProps,
    defaultValue: defaultPageSizeFromProps,
  });

  const handlePageChange = (nextPage: number) => {
    onPageChange(nextPage);
    onChange(nextPage, pageSize);
  };

  const handlePageSizeChange = (nextPageSize: number) => {
    const nextPage = 1;

    onPageChange(nextPage);
    onPageSizeChange(nextPageSize);
    onChange(nextPage, nextPageSize);
  };

  // why update in next loop?
  // jumper's initial value is null.
  // if set jumper's next value to null directly,
  // then null === null, won't trigger jumper update inputText.
  const updateJumperPageInNextLoop = (tempValue: number | null, nextValue: number | null) => {
    setJumperPage(tempValue);

    setTimeout(() => {
      setJumperPage(nextValue);
    });
  };

  const handleJumperBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    updateJumperPageInNextLoop(Number(event.target.value), null);
  };

  const handleJumperEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === '') return;

    const nextPage = Number(event.currentTarget.value);

    onPageChange(nextPage);
    onChange(nextPage, pageSize);
    updateJumperPageInNextLoop(Number(event.currentTarget.value), null);
  };

  const optionsWrapperRef = useRef<HTMLDivElement>(null);

  const length = useMemo(() =>
    total > 0 && pageSize > 0 ? Math.ceil(total / pageSize) : 0
  , [pageSize, total]);

  return (
    <div
      className={classnames(`${prefix}-pagination`, className)}
      style={style}
    >
      {
        length > 0
          ? <>
              <Button
                className={`${prefix}-pagination__item`}
                disabled={disabled || page <= 1}
                onClick={event => {
                  event.currentTarget.blur();
                  handlePageChange(page - 1);
                }}
              >
                <Icon type="left" />
              </Button>
              {Array.from({ length }).map((_, index) => (
                <Button
                  key={index}
                  className={classnames({
                    [`${prefix}-pagination__item`]: true,
                    [`${prefix}-pagination__item--active`]: index + 1 === page,
                  })}
                  disabled={disabled}
                  onClick={() => index + 1 !== page && handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                className={`${prefix}-pagination__item`}
                disabled={disabled || page >= length}
                onClick={event => {
                  event.currentTarget.blur();
                  handlePageChange(page + 1);
                }}
              >
                <Icon type="right" />
              </Button>
              <div
                className={`${prefix}-pagination__options-wrapper`}
                ref={optionsWrapperRef}
              >
                <Select
                  className={`${prefix}-pagination__options`}
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  disabled={disabled}
                  getPopupMountNode={() => optionsWrapperRef.current}
                >
                  {pageSizeOptions.map(size => (
                    <Option key={size} value={size}>
                      {`${size} / Page`}
                    </Option>
                  ))}
                </Select>
              </div>
              {showJumper && (
                <div className={`${prefix}-pagination__jumper`}>
                  <span className={`${prefix}-pagination__jumper-text`}>
                    Go to
                  </span>
                  <InputNumber
                    className={`${prefix}-pagination__jumper-input`}
                    placeholder="Page"
                    value={jumperPage}
                    min={1}
                    max={length}
                    showControl={false}
                    onBlur={handleJumperBlur}
                    onEnter={handleJumperEnter}
                  />
                </div>
              )}
            </>
          : 'empty'
      }
    </div>
  );
};

Pagination.defaultProps = {
  total: 0,
  pageSizeOptions: [10, 20, 50, 100],
};

export default Pagination;
