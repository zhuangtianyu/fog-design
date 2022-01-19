import React from 'react';
import Tabs from '@components/tabs';
import './index.less';

const { TabPane } = Tabs;

const tabs = [
  { label: '🚊 Line 4', value: 4, content: 'The center of the universe is here, I heard.' },
  { label: '🚊 Line 10', value: 10, content: 'Transfer a subway, transfer a station.' },
  { label: '🚊 Line 13', value: 13, content: 'Happy hot pot, happy day and night.' },
];

const TabsDemo = () => {

  return (
    <div className="tabs-demo">
      <h2>Tabs</h2>
      <h3>Basic Usage</h3>
      <Tabs defaultValue={tabs[0].value}>
        {tabs.map(item => (
          <TabPane key={item.value} label={item.label} value={item.value}>
            {item.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsDemo;
