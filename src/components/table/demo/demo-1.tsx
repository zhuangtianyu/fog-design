import React from 'react';
import Table, { ColumnType } from '@components/table';

const columns: ColumnType[] = [
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

const Demo = () => <Table columns={columns} data={data} />;

export default Demo;
