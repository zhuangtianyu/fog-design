import React, { useState } from 'react';
import Button from '@components/button';
import Modal from '@components/modal';
import './index.less';

const Demo = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        Basic usage.
      </Modal>
    </>
  );
};

export default Demo;
