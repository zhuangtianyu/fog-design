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
      <h3>By Methods</h3>
      <Button
        onClick={() => {
          Modal.confirm({
            title: 'Hi',
            content: 'Beach, waves, and night.',
          });
        }}
      >
        Modal.confirm
      </Button>
      <Button
        onClick={() => {
          const modal = Modal.confirm({
            title: 'Hi',
            content: (
              <>
                <span style={{ marginRight: 12 }}>
                  Beach, waves, and night.
                </span>
                <Button
                  onClick={() => {
                    modal.update({ content: 'Catch the moment.' });
                  }}
                >
                  Update
                </Button>
              </>
            ),
          });
        }}
      >
        Update reference
      </Button>
      <Button
        onClick={() => {
          for (let i = 0; i < 3 ; i++) {
            setTimeout(() => {
              Modal.confirm({
                title: 'Hi',
                content: (
                  <Button onClick={Modal.destroyAll}>
                    Destroy all
                  </Button>
                ),
              });
            }, i * 300);
          }
        }}
      >
        Modal.destroyAll
      </Button>
    </div>
  );
};

export default ModalDemo;
