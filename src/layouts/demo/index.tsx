import React, { useState, useContext, useRef, useLayoutEffect } from 'react';
import namespace from '@namespace';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow, tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DarkContext } from '../../index';
import Icon from '@components/icon';
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

  const dark = useContext(DarkContext);

  const [codeVisible, setCodeVisible] = useState<boolean>(false);

  const [codeHeight, setCodeHeight] = useState<number | string>(() => ResizeObserver ? 0 : 'auto');

  const codeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (codeVisible && ResizeObserver && codeRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const { height } = codeRef.current.getBoundingClientRect();

        setCodeHeight(height);
      });

      resizeObserver.observe(codeRef.current);

      return () => resizeObserver.disconnect();
    }
  }, [codeVisible]);

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
      <div
        className={`${prefix}-demo__code-wrapper`}
        style={{ height: codeVisible ? codeHeight : 0 }}
      >
        <div ref={codeRef}>
          <SyntaxHighlighter
            className={`${prefix}-demo__code`}
            customStyle={{ padding: 20 }}
            language="typescript"
            style={!dark ? tomorrow : tomorrowNightBright}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Demo;
