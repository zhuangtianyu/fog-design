import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Button from '@components/button';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;

export interface PaginationItemProps  {
  index: number;
  page: number;
  pageCount: number;
  disabled?: boolean;
  onPageChange: (nextPage: number) => void;
}

const PaginationItem: React.FC<PaginationItemProps> = props => {
  const {
    index,
    page,
    pageCount,
    disabled,
    onPageChange,
  } = props;

  const currentPage = index + 1;

  const [backwardEntered, setBackwardEntered] = useState<boolean>(false);

  const [forwardEntered, setForwardEntered] = useState<boolean>(false);

  const backwardRadius = Math.max(5 - pageCount + page, 3);

  const forwardRadius = Math.max(5 - page + 1, 3);

  if (currentPage === 1) return (
    <Button
      className={classnames({
        [`${prefix}-pagination__item`]: true,
        [`${prefix}-pagination__item--active`]: page === 1,
      })}
      disabled={disabled}
      onClick={() => page !== 1 && onPageChange(1)}
    >
      {index + 1}
    </Button>
  );

  if (currentPage === pageCount) return (
    <Button
      className={classnames({
        [`${prefix}-pagination__item`]: true,
        [`${prefix}-pagination__item--active`]: page === pageCount,
      })}
      disabled={disabled}
      onClick={() => page !== pageCount && onPageChange(pageCount)}
    >
      {index + 1}
    </Button>
  );

  if (currentPage === page - backwardRadius) return (
    <Button
      className={classnames([
        `${prefix}-pagination__item`,
        `${prefix}-pagination__item--ellipsis`,
      ])}
      disabled={disabled}
      onMouseEnter={() => setBackwardEntered(true)}
      onMouseLeave={() => setBackwardEntered(false)}
      onClick={() => onPageChange(Math.max(1, page - 5))}
    >
      <Icon type={backwardEntered ? 'double-left' : 'more'} />
    </Button>
  );

  if (currentPage === page + forwardRadius) return (
    <Button
      className={classnames([
        `${prefix}-pagination__item`,
        `${prefix}-pagination__item--ellipsis`,
      ])}
      disabled={disabled}
      onMouseEnter={() => setForwardEntered(true)}
      onMouseLeave={() => setForwardEntered(false)}
      onClick={() => onPageChange(Math.min(pageCount, page + 5))}
    >
      <Icon type={forwardEntered ? 'double-right' : 'more'} />
    </Button>
  );

  if (currentPage < page - backwardRadius) return null;

  if (currentPage > page + forwardRadius) return null;

  return (
    <Button
      className={classnames({
        [`${prefix}-pagination__item`]: true,
        [`${prefix}-pagination__item--active`]: index + 1 === page,
      })}
      disabled={disabled}
      onClick={() => index + 1 !== page && onPageChange(index + 1)}
    >
      {index + 1}
    </Button>
  );
};

export default PaginationItem;
