import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import TreeNode from './components/node/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = number | string;

export interface NodeType {
  value: ValueType;
  title: React.ReactChild;
  children?: NodeType[];
}

export interface TreeProps  {
  /** --skip */
  className?: string;
  data?: NodeType[];
  expandedValues?: ValueType[];
  defaultExpandedValues?: ValueType[];
  onExpandedChange?: (expandedValues: ValueType[]) => void;
}

export const Tree: React.FC<TreeProps> = props => {
  const {
    className,
    data,
    expandedValues: expandedValuesFromProps,
    defaultExpandedValues: defaultExpandedValuesFromProps,
    onExpandedChange: onExpandedChangeFromProps,
  } = props;

  const { value: expandedValues = [], onChange: onExpandedChange } = useControlled({
    value: expandedValuesFromProps,
    defaultValue: defaultExpandedValuesFromProps,
    onChange: onExpandedChangeFromProps,
  });

  const handleExpandedToggle = (nodeValue: ValueType) => {
    if (expandedValues.includes(nodeValue)) {
      onExpandedChange(expandedValues.filter(item => item !== nodeValue));
    } else {
      onExpandedChange([...expandedValues, nodeValue]);
    }
  };

  if (!Array.isArray(data)) return null;

  return (
    <div className={classnames(`${prefix}-tree`, className)}>
      {data.map(item => (
        <TreeNode
          key={item.value}
          node={item}
          floorIndex={1}
          expandedValues={expandedValues}
          onExpandedToggle={handleExpandedToggle}
        />
      ))}
    </div>
  );
};

export default Tree;
