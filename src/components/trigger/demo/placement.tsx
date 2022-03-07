import React from 'react';
import Button from '@components/button';
import Trigger from '@components/trigger';
import { popup } from './index';
import './placement.less';

const Placement = () => {

  return (
    <div className="placement">
      <div className="top">
        <Trigger placement="topLeft" popup={popup}>
          <Button>Top left</Button>
        </Trigger>
        <Trigger placement="top" popup={popup}>
          <Button>Top</Button>
        </Trigger>
        <Trigger placement="topRight" popup={popup}>
          <Button>Top right</Button>
        </Trigger>
      </div>
      <div className="center">
        <div className="left">
          <Trigger placement="leftTop" popup={popup}>
            <Button>Left top</Button>
          </Trigger>
          <Trigger placement="left" popup={popup}>
            <Button>Left</Button>
          </Trigger>
          <Trigger placement="leftBottom" popup={popup}>
            <Button>Left bottom</Button>
          </Trigger>
        </div>
        <div className="right">
          <Trigger placement="rightTop" popup={popup}>
            <Button>Right top</Button>
          </Trigger>
          <Trigger placement="right" popup={popup}>
            <Button>Right</Button>
          </Trigger>
          <Trigger placement="rightBottom" popup={popup}>
            <Button>Right bottom</Button>
          </Trigger>
        </div>
      </div>
      <div className="bottom">
        <Trigger placement="bottomLeft" popup={popup}>
          <Button>Bottom left</Button>
        </Trigger>
        <Trigger placement="bottom" popup={popup}>
          <Button>Bottom</Button>
        </Trigger>
        <Trigger placement="bottomRight" popup={popup}>
          <Button>Bottom right</Button>
        </Trigger>
      </div>
    </div>
  );
};

export default Placement;
