import React from 'react';
import Pagination from '@components/pagination';

const Demo = () => (
  <Pagination
    total={100}
    defaultPage={1}
    defaultPageSize={20}
  />
);

export default Demo;
