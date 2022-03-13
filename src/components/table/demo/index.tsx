import React from 'react';
import Table, { ColumnType } from '@components/table';
import './index.less';

const columns: ColumnType[] = [
  {
    key: 'id',
    name: 'Name',
    render: value => `Line ${value}`,
  },
  {
    key: 'starting',
    name: 'Starting',
  },
  {
    key: 'terminal',
    name: 'Terminal',
  },
];

const data = [
  {
    id: 4,
    starting: 'Anheqiao North',
    terminal: 'Tiangongyuan',
  },
  {
    id: 10,
    starting: 'Suzhoujie',
    terminal: 'Huoqiying',
  },
  {
    id: 13,
    starting: 'Xizhimen',
    terminal: 'Dongzhimen',
  },
];

const TableDemo = () => {

  return (
    <div className="table-demo">
      <h2>Table</h2>
      <h3>Basic Usage</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TableDemo;
