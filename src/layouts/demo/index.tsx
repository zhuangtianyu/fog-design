import React, { useState } from 'react';
import Icon from '@components/icon';
import namespace from '@namespace';
import './index.less';

const { prefix } = namespace;

interface DemoProps {
  title: string;
  description?: React.ReactChild;
  content: React.ReactChild;
  code: string;
}

const Demo: React.FC<DemoProps> = props => {
  const { title, description, content, code } = props;

  const [codeVisible, setCodeVisible] = useState<boolean>(false);

  return (
    <div className={`${prefix}-demo`}>
      <h3 className={`${prefix}-demo__title`}>
        <span>{title}</span>
        <div className={`${prefix}-demo__options`}>
          <Icon
            type="code"
            onClick={() => setCodeVisible(!codeVisible)}
          />
        </div>
      </h3>
      {description && (
        <p className={`${prefix}-demo__description`}>
          {description}
        </p>
      )}
      <div className={`${prefix}-demo__content`}>
        {content}
      </div>
      {codeVisible && (
        <pre className={`${prefix}-demo__code`}>
          {code}
        </pre>
      )}
    </div>
  );
};

export default Demo;
