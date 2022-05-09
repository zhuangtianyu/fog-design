import React from 'react';
import Grid from '@components/grid';

const { Row, Col } = Grid;

const Demo = () => {

  return (
    <>
      <Row>
        <Col span={24}>
          <div>col-24</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={12}>
          <div>col-12</div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
      </Row>
    </>
  );
};

export default Demo;
