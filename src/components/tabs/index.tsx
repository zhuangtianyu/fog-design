import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import { isFunction } from '@utils/index';
import './index.less';

export type ValueType = number | string | null | any;

export interface TabPaneProps {
  label?: string;
  value?: ValueType;
  content?: React.ReactChild;
  children?: React.ReactChild;
}

const TabPane = (props: TabPaneProps) => null;

export interface TabsProps  {
  /** --skip */
  className?: string;
  value?: ValueType;
  defaultValue?: ValueType;
  tabs?: TabPaneProps[];
  onChange?: (value: ValueType) => void;
  onTabClick?: (value: ValueType) => void;
}

export interface TabsTypes extends React.FC<TabsProps> {
  TabPane: typeof TabPane;
}

const { prefix } = namespace;

const initialInkStyle = { left: 0, width: 0 };

export const Tabs: TabsTypes = props => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    tabs: tabsFromProps,
    onTabClick,
    children,
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const tabs = useMemo<TabPaneProps[]>(() => (
    children
      ? React.Children.map(children, (item: React.ReactElement) => ({
          label: item.props.label,
          value: item.props.value,
          content: item.props.content,
          children: item.props.children,
        }))
      : tabsFromProps || []
  ), [children, tabsFromProps]);

  const [inkStyle, setInkStyle] = useState<React.CSSProperties>(initialInkStyle);

  const refs = useMemo<React.RefObject<HTMLDivElement>[]>(() => {
    return tabs.map(() => React.createRef());
  }, [tabs]);

  const content = useMemo(() => {
    const index = tabs.findIndex(item => item.value === value);

    return index !== -1
      ? tabs[index].children || tabs[index].content
      : null;
  }, [value, tabs]);

  const handleTabClick = nextValue => {
    nextValue !== value && onChange(nextValue);
    isFunction(onTabClick) && onTabClick(nextValue);
  };

  useEffect(() => {
    const index = tabs.findIndex(item => item.value === value);

    if (index !== -1) {
      const ref = refs[index];

      setInkStyle({
        left: ref.current.offsetLeft,
        width: ref.current.offsetWidth,
      });
    } else {
      setInkStyle(initialInkStyle);
    }
  }, [value, tabs]);

  return (
    <div className={classnames(`${prefix}-tabs`, className)}>
      <div className={`${prefix}-tabs__navs`}>
        <div className={`${prefix}-tabs__bar`}>
          <div className={`${prefix}-tabs__ink`} style={inkStyle} />
        </div>
        {tabs.map((item, index) => (
          <div
            className={classnames({
              [`${prefix}-tabs__nav`]: true,
              [`${prefix}-tabs__nav--active`]: item.value === value,
            })}
            key={item.value}
            ref={refs[index]}
            role="tab"
            tabIndex={0}
            onClick={() => handleTabClick(item.value)}
            onKeyDown={event => event.key === 'Enter' && handleTabClick(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className={`${prefix}-tabs__content`}>
        {content}
      </div>
    </div>
  );
};

Tabs.defaultProps = {};

Tabs.TabPane = TabPane;

export default Tabs;
