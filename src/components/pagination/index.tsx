import * as React from 'react';
import { useRef, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import { isFunction } from '@utils/index';
import Button from '@components/button';
import Select from '@components/select';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;
const { Option } = Select;

const defaultPage = 1;
const defaultPageSize = 20;

export interface PaginationProps  {
  /** --skip */
  className?: string;
  page?: number;
  pageSize?: number;
  defaultPage?: number;
  defaultPageSize?: number;
  total?: number;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
}

export const Pagination: React.FC<PaginationProps> = props => {
  const {
    className,
    page: pageFromProps,
    pageSize: pageSizeFromProps,
    defaultPage: defaultPageFromProps,
    defaultPageSize: defaultPageSizeFromProps,
    total,
    pageSizeOptions,
    onChange: onChangeFromProps,
  } = props;

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

  const optionsWrapperRef = useRef<HTMLDivElement>(null);

  const length = useMemo(() =>
    total > 0 && pageSize > 0 ? Math.ceil(total / pageSize) : 0
  , [pageSize, total]);

  return (
    <div className={classnames(`${prefix}-pagination`, className)}>
      {
        length > 0
          ? <>
              <Button
                className={`${prefix}-pagination__item`}
                disabled={page <= 1}
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
                  onClick={() => index + 1 !== page && handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                className={`${prefix}-pagination__item`}
                disabled={page >= length}
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
                  getPopupMountNode={() => optionsWrapperRef.current}
                >
                  {pageSizeOptions.map(size => (
                    <Option key={size} value={size}>
                      {`${size} / Page`}
                    </Option>
                  ))}
                </Select>
              </div>
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
