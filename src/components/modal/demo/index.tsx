import React, { useState } from 'react';
import Button from '@components/button';
import Modal from '@components/modal';
import './index.less';

const ModalDemo = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="modal-demo">
      <h2>Modal</h2>
      <h3>Basic Usage</h3>
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
    </div>
  );
};

export default ModalDemo;
