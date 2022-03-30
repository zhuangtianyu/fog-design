import React, { useState, useContext, useRef, useLayoutEffect } from 'react';
import namespace from '@namespace';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import lightStyle from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import darkStyle from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { DarkContext } from '../../index';
import Icon from '@components/icon';
import Message from '@components/message';
import './index.less';

const { prefix } = namespace;

SyntaxHighlighter.registerLanguage('tsx', tsx);

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

  const handleCopy = () => {
    navigator
      .clipboard
      .writeText(code)
      .then(() => Message.success({ content: 'Code copied' }))
      .catch(() => Message.error({ content: 'Please copy manually' }));
  };

  return (
    <div className={`${prefix}-demo`}>
      <h3 className={`${prefix}-demo__title`}>
        <span>{title}</span>
        <div className={`${prefix}-demo__options`}>
          <Icon
            type="copy"
            onClick={handleCopy}
          />
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
            className={`${prefix}-demo__pre`}
            customStyle={{ margin: 0, padding: 20 }}
            language="tsx"
            style={!dark ? lightStyle : darkStyle}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Demo;
