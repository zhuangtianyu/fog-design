import React from 'react';
import Button from '@components/button';
import Trigger from '@components/trigger';
import './demo-3.less';

const popup = (
  <div style={{ padding: '4px 0' }}>
    {new Array(3).fill(1).map((_, index) => (
      <div style={{ padding: '4px 16px', fontSize: 14, lineHeight: '22px' }} key={index}>
        Popup content injected
      </div>
    ))}
  </div>
);

const TriggerWithDefaultProps = props => <Trigger popup={popup} showArrow {...props} />;

const Demo = () => {

  return (
    <div className="trigger-demo-3">
      <div className="top">
        <TriggerWithDefaultProps placement="topLeft">
          <Button>Top left</Button>
        </TriggerWithDefaultProps>
        <TriggerWithDefaultProps placement="top">
          <Button>Top</Button>
        </TriggerWithDefaultProps>
        <TriggerWithDefaultProps placement="topRight">
          <Button>Top right</Button>
        </TriggerWithDefaultProps>
      </div>
      <div className="center">
        <div className="left">
          <TriggerWithDefaultProps placement="leftTop">
            <Button>Left top</Button>
          </TriggerWithDefaultProps>
          <TriggerWithDefaultProps placement="left">
            <Button>Left</Button>
          </TriggerWithDefaultProps>
          <TriggerWithDefaultProps placement="leftBottom">
            <Button>Left bottom</Button>
          </TriggerWithDefaultProps>
        </div>
        <div className="right">
          <TriggerWithDefaultProps placement="rightTop">
            <Button>Right top</Button>
          </TriggerWithDefaultProps>
          <TriggerWithDefaultProps placement="right">
            <Button>Right</Button>
          </TriggerWithDefaultProps>
          <TriggerWithDefaultProps placement="rightBottom">
            <Button>Right bottom</Button>
          </TriggerWithDefaultProps>
        </div>
      </div>
      <div className="bottom">
        <TriggerWithDefaultProps placement="bottomLeft">
          <Button>Bottom left</Button>
        </TriggerWithDefaultProps>
        <TriggerWithDefaultProps placement="bottom">
          <Button>Bottom</Button>
        </TriggerWithDefaultProps>
        <TriggerWithDefaultProps placement="bottomRight">
          <Button>Bottom right</Button>
        </TriggerWithDefaultProps>
      </div>
    </div>
  );
};

export default Demo;
