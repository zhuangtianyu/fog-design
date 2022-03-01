import React, { useState } from 'react';
import Loading from '@components/loading';
import Switch from '@components/switch';
import Icon from '@components/icon';
import './index.less';

const LoadingDemo = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tipLoading, setTipLoading] = useState<boolean>(true);
  const [iconLoading, setIconLoading] = useState<boolean>(true);

  return (
    <div className="loading-demo">
      <h2>Loading</h2>
      <h3>Basic Usage</h3>
      <Loading />
      <h3>Container Usage</h3>
      <Loading
        wrapperClassName="loading-container"
        loading={loading}
      >
        <div className="loading-content">
          <div className="date">2022-03-01</div>
          <div>Dancing by the sea till night falls.</div>
        </div>
      </Loading>
      <Switch checked={loading} onChange={setLoading} />
      <h3>Tip</h3>
      <Loading
        wrapperClassName="loading-container"
        loading={tipLoading}
        tip="Loading..."
      >
        <div className="loading-content">
          <div className="date">2022-03-01</div>
          <div>Dancing by the sea till night falls.</div>
        </div>
      </Loading>
      <Switch checked={tipLoading} onChange={setTipLoading} />
      <h3>Customized Icon</h3>
      <Loading
        wrapperClassName="loading-container"
        loading={iconLoading}
        icon={<Icon type="loading-3/4" />}
      >
        <div className="loading-content">
          <div className="date">2022-03-01</div>
          <div>Dancing by the sea till night falls.</div>
        </div>
      </Loading>
      <Switch checked={iconLoading} onChange={setIconLoading} />
    </div>
  );
};

export default LoadingDemo;
