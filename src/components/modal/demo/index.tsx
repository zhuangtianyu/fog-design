import React, { useState } from 'react';
import Button from '@components/button';
import Modal from '@components/modal';
import './index.less';

const promiseHandler = (duration = 1000) => new Promise(resolve => {
  const timer = setTimeout(() => {
    resolve(null);
    clearTimeout(timer);
  }, duration);
});

const ModalDemo = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [asyncVisible, setAsyncVisible] = useState<boolean>(false);

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
      <h3>By Method</h3>
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
                    modal.update({
                      content: (
                        <span style={{ lineHeight: '32px' }}>
                          Catch the moment.
                        </span>
                      ),
                    });
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
      <h3>Async Logic</h3>
      <Modal
        title="Async modal"
        visible={asyncVisible}
        onCancel={() => setAsyncVisible(false)}
        onConfirm={() => promiseHandler().then(() => setAsyncVisible(false))}
      >
        Async logic in basic usage.
      </Modal>
      <Button onClick={() => setAsyncVisible(true)}>
        Open modal
      </Button>
      <Button
        onClick={() => {
          Modal.confirm({
            title: 'Async method',
            content: 'Async logic by method.',
            onConfirm: promiseHandler,
          });
        }}
      >
        Modal.confirm
      </Button>
    </div>
  );
};

export default ModalDemo;
