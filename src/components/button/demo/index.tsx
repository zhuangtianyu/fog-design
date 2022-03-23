import React, { useState, useEffect } from 'react';
import Button from '@components/button';
import Icon from '@components/icon';
import Message from '@components/message';
import './index.less';

const ButtonDemo = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    import('@static/docs-config.json')
      .then(config => {
        console.log(config.button.demoContent);
      })
      .catch(error => {
        Message.error({ content: error.message });
      });
  }, []);

  return (
    <div className="button-demo">
      <h2>Button</h2>
      <h3>Type</h3>
      <Button type="primary">
        Primary
      </Button>
      <Button>
        Default
      </Button>
      <Button type="dashed">
        Dashed
      </Button>
      <Button type="link">
        Link
      </Button>
      <Button type="text">
        Text
      </Button>
      <h3>Icon</h3>
      <Button type="primary">
        <Icon type="calendar" />
        Date
      </Button>
      <Button>
        <Icon type="email" />
        Send
      </Button>
      <Button type="dashed">
        Trigger
        <Icon type="down" />
      </Button>
      <Button type="link">
        <Icon type="link" />
        Link
      </Button>
      <Button type="text">
        <Icon type="edit" />
        Edit
      </Button>
      <h3>Loading</h3>
      <Button type="primary" loading>
        Loading
      </Button>
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);

          setTimeout(() => setLoading(false), 1000);
        }
      }>
        <Icon type="email" />
        Click me
      </Button>
      <h3>Disabled</h3>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button disabled>
        Default
      </Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
      <Button type="text" disabled>
        Text
      </Button>
      <h3>Danger</h3>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>
        Default
      </Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="link" danger>
        Link
      </Button>
      <Button type="text" danger>
        Text
      </Button>
    </div>
  );
};

export default ButtonDemo;
