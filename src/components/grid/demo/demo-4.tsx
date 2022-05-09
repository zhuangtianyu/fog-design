import React from 'react';
import Grid from '@components/grid';

const { Row, Col } = Grid;

const Demo = () => {

  return (
    <>
      <p>align="start"</p>
      <Row align="start" gutter={12}>
        <Col span={6}>
          <div style={{ height: 84 }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ height: 48 }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ height: 72 }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ height: 48 }}>col-6</div>
        </Col>
      </Row>
      <p>align="center"</p>
      <Row align="center" gutter={12}>
        <Col span={6}>
          <div style={{ height: 84 }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ height: 48 }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ height: 72 }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ height: 48 }}>col-6</div>
        </Col>
      </Row>
    </>
  );
};

export default Demo;
