import React from 'react';
import Grid from '@components/grid';

const { Row, Col } = Grid;

const Demo = () => {

  return (
    <>
      <p>justify="start"</p>
      <Row justify="start">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
      <p>justify="space-between"</p>
      <Row justify="space-between">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
    </>
  );
};

export default Demo;
