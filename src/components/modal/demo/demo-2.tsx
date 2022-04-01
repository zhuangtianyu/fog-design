import React from 'react';
import Button from '@components/button';
import Modal from '@components/modal';
import './index.less';

const Demo = () => {

  return (
    <>
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
    </>
  );
};

export default Demo;
