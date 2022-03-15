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
    width: 160,
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
    key: 'program',
    name: 'Program',
  },
  {
    key: 'psychology',
    name: 'Psychology',
  },
  {
    key: 'music',
    name: 'Music',
  },
  {
    key: 'dance',
    name: 'Dance',
  },
  {
    key: 'natural',
    name: 'Natural',
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
    name: 'A',
    math: 100,
    physics: 100,
    program: 100,
    psychology: 100,
    music: 100,
    dance: 100,
    natural: 100,
    total: 700,
  },
  {
    id: 1002,
    name: 'Dan',
    math: 100,
    physics: 100,
    program: 100,
    psychology: 100,
    music: 100,
    dance: 100,
    natural: 100,
    total: 700,
  },
  {
    id: 1003,
    name: 'Evan',
    math: 100,
    physics: 100,
    program: 100,
    psychology: 100,
    music: 100,
    dance: 100,
    natural: 100,
    total: 700,
  },
  {
    id: 1004,
    name: 'Johnson',
    math: 100,
    physics: 100,
    program: 100,
    psychology: 100,
    music: 100,
    dance: 100,
    natural: 100,
    total: 700,
  },
];

const TableDemo = () => {

  return (
    <div className="table-demo">
      <h2>Table</h2>
      <h3>Basic Usage</h3>
      <Table columns={columns1} data={data1} />
      <h3>Fixed Column</h3>
      <Table columns={columns2} data={data2} contentWidth={2000} />
    </div>
  );
};

export default TableDemo;
