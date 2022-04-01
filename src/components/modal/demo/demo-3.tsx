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

const Demo = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Modal
        title="Async modal"
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={() => promiseHandler().then(() => setVisible(false))}
      >
        Async logic in basic usage.
      </Modal>
      <Button onClick={() => setVisible(true)}>
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
    </>
  );
};

export default Demo;
