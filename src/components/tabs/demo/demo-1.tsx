import React from 'react';
import Tabs from '@components/tabs';

const { TabPane } = Tabs;

const tabs = [
  { label: '🚊 Line 4', value: 4, content: 'The center of the universe is here, I heard.' },
  { label: '🚊 Line 10', value: 10, content: 'Transfer a subway, transfer a station.' },
  { label: '🚊 Line 13', value: 13, content: 'Happy hot pot, happy day and night.' },
];

const Demo = () => {

  return (
    <Tabs defaultValue={tabs[0].value}>
      {tabs.map(item => (
        <TabPane key={item.value} label={item.label} value={item.value}>
          {item.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Demo;
