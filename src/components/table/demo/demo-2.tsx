import React from 'react';
import Table, { ColumnType } from '@components/table';

const columns: ColumnType[] = [
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
    key: 'program',
    name: 'Program',
  },
  {
    key: 'physics',
    name: 'Physics',
  },
  {
    key: 'psychology',
    name: 'Psychology',
  },
  {
    key: 'philosophy',
    name: 'Philosophy',
  },
  {
    key: 'natural',
    name: 'Natural',
  },
  {
    key: 'music',
    name: 'Music',
  },
  {
    key: 'total',
    name: 'Total',
    fixed: 'right',
  },
];

const data = [
  {
    id: 1001,
    name: 'A',
    math: 100,
    program: 100,
    physics: 100,
    psychology: 100,
    philosophy: 100,
    natural: 100,
    music: 100,
    total: 700,
  },
  {
    id: 1002,
    name: 'Dan',
    math: 100,
    program: 100,
    physics: 100,
    psychology: 100,
    philosophy: 100,
    natural: 100,
    music: 100,
    total: 700,
  },
  {
    id: 1003,
    name: 'Evan',
    math: 100,
    program: 100,
    physics: 100,
    psychology: 100,
    philosophy: 100,
    natural: 100,
    music: 100,
    total: 700,
  },
  {
    id: 1004,
    name: 'Johnson',
    math: 100,
    program: 100,
    physics: 100,
    psychology: 100,
    philosophy: 100,
    natural: 100,
    music: 100,
    total: 700,
  },
];

const Demo = () => <Table columns={columns} data={data} contentWidth={2000} />;

export default Demo;
