import React from 'react';
import Table, { ColumnType } from '@components/table';
import './index.less';

const columns1: ColumnType[] = [
  {
    key: 'id',
    name: 'Line',
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

const data1 = [
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

const columns2: ColumnType[] = [
  {
    key: 'id',
    name: 'No',
    width: 100,
    fixed: 'left',
  },
  {
    key: 'name',
    name: 'Name',
    width: 150,
    fixed: 'left',
  },
  {
    key: 'math',
    name: 'Math',
  },
  {
    key: 'physics',
    name: 'Physics',
  },
  {
    key: 'chemistry',
    name: 'Chemistry',
  },
  {
    key: 'total',
    name: 'Total',
    fixed: 'right',
  },
];

const data2 = [
  {
    id: 1001,
    name: 'Dan',
    math: 100,
    physics: 100,
    chemistry: 100,
    total: 300,
  },
  {
    id: 1002,
    name: 'Evan',
    math: 100,
    physics: 100,
    chemistry: 100,
    total: 300,
  },
  {
    id: 1003,
    name: 'Johnson',
    math: 100,
    physics: 100,
    chemistry: 100,
    total: 300,
  },
];

const TableDemo = () => {

  return (
    <div className="table-demo">
      <h2>Table</h2>
      <h3>Basic Usage</h3>
      <Table columns={columns1} data={data1} />
      <h3>Fixed Column</h3>
      <Table columns={columns2} data={data2} contentWidth={1200} />
    </div>
  );
};

export default TableDemo;
