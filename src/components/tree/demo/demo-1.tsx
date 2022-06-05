import React from 'react';
import Tree from '@components/tree';

const data = [
  {
    title: '1',
    value: '1',
    children: [
      {
        title: '1-1',
        value: '1-1',
        children: [
          {
            title: '1-1-1',
            value: '1-1-1',
            children: [
              {
                title: '1-1-1-1',
                value: '1-1-1-1',
                children: [],
              },
              {
                title: '1-1-1-2',
                value: '1-1-1-2',
                children: [],
              },
            ],
          },
          {
            title: '1-1-2',
            value: '1-1-2',
            children: [],
          },
        ],
      },
      {
        title: '1-2',
        value: '1-2',
        children: [
          {
            title: '1-2-1',
            value: '1-2-1',
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: '2',
    value: '2',
    children: [
      {
        title: '2-1',
        value: '2-1',
        children: [],
      },
    ],
  },
];

const Demo = () => <Tree data={data} />;

export default Demo;
