import React, { useState } from 'react';
import Loading from '@components/loading';
import Switch from '@components/switch';
import Icon from '@components/icon';

const Demo = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Loading
        wrapperClassName="loading-container"
        loading={loading}
        icon={<Icon type="loading-3/4" />}
      >
        <div className="loading-content">
          <div className="date">2022-03-01</div>
          <div>Dancing by the sea till night falls.</div>
        </div>
      </Loading>
      <Switch checked={loading} onChange={setLoading} />
    </>
  );
};

export default Demo;
