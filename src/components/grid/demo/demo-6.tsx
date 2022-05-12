import React from 'react';
import Grid from '@components/grid';

const { Row, Col } = Grid;

const Demo = () => {

  return (
    <>
      <p>wrap="true"</p>
      <Row>
        <Col span={24}>
          <div>col-24</div>
        </Col>
        <Col span={16}>
          <div>col-16</div>
        </Col>
      </Row>
      <p>wrap="false"</p>
      <Row wrap={false}>
        <Col span={24}>
          <div>col-24</div>
        </Col>
        <Col span={16}>
          <div>col-16</div>
        </Col>
      </Row>
    </>
  );
};

export default Demo;
