import React from 'react';
import Grid from '@components/grid';

const { Row, Col } = Grid;

const Demo = () => {

  return (
    <>
      <Row>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={6} offset={6}>
          <div>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          <div>col-6</div>
        </Col>
        <Col span={6} offset={6}>
          <div>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={6}>
          <div>col-4</div>
        </Col>
        <Col span={12} offset={2}>
          <div>col-12</div>
        </Col>
      </Row>
    </>
  );
};

export default Demo;
