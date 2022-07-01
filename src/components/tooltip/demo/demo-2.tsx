import React from 'react';
import Tooltip from '@components/tooltip';
import Button from '@components/button';
import './demo-2.less';

const TooltipWithDefaultProps = props => <Tooltip content="Tooltip content." {...props} />;

const Demo = () => (
  <div className="tooltip-demo-2">
    <div className="top">
      <TooltipWithDefaultProps placement="topLeft">
        <Button>Top left</Button>
      </TooltipWithDefaultProps>
      <TooltipWithDefaultProps placement="top">
        <Button>Top</Button>
      </TooltipWithDefaultProps>
      <TooltipWithDefaultProps placement="topRight">
        <Button>Top right</Button>
      </TooltipWithDefaultProps>
    </div>
    <div className="center">
      <div className="left">
        <TooltipWithDefaultProps placement="leftTop">
          <Button>Left top</Button>
        </TooltipWithDefaultProps>
        <TooltipWithDefaultProps placement="left">
          <Button>Left</Button>
        </TooltipWithDefaultProps>
        <TooltipWithDefaultProps placement="leftBottom">
          <Button>Left bottom</Button>
        </TooltipWithDefaultProps>
      </div>
      <div className="right">
        <TooltipWithDefaultProps placement="rightTop">
          <Button>Right top</Button>
        </TooltipWithDefaultProps>
        <TooltipWithDefaultProps placement="right">
          <Button>Right</Button>
        </TooltipWithDefaultProps>
        <TooltipWithDefaultProps placement="rightBottom">
          <Button>Right bottom</Button>
        </TooltipWithDefaultProps>
      </div>
    </div>
    <div className="bottom">
      <TooltipWithDefaultProps placement="bottomLeft">
        <Button>Bottom left</Button>
      </TooltipWithDefaultProps>
      <TooltipWithDefaultProps placement="bottom">
        <Button>Bottom</Button>
      </TooltipWithDefaultProps>
      <TooltipWithDefaultProps placement="bottomRight">
        <Button>Bottom right</Button>
      </TooltipWithDefaultProps>
    </div>
  </div>
);

export default Demo;
