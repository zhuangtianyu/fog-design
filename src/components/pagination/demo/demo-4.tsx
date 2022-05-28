import React from 'react';
import Pagination from '@components/pagination';

const Demo = () => (
  <>
    <Pagination
      style={{ marginBottom: 12 }}
      total={100}
      showJumper
      showTotal
    />
    <br />
    <Pagination
      total={100}
      showJumper
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    />
  </>
);

export default Demo;
