import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import './index.less';

export type ValueType = number | string;

export interface TreeNode {
  value: ValueType;
  title: React.ReactChild;
  children?: TreeNode[];
}

export interface TreeProps  {
  /** --skip */
  className?: string;
  data?: TreeNode[];
  expandedValues?: ValueType[];
  defaultExpandedValues?: ValueType[];
  onExpandedChange?: (expandedValues: ValueType[]) => void;
}

const { prefix } = namespace;

export const Tree: React.FC<TreeProps> = props => {
  const {
    className,
    data,
    expandedValues: expandedValuesFromProps,
    defaultExpandedValues: defaultExpandedValuesFromProps,
    onExpandedChange: onExpandedChangeFromProps,
  } = props;

  const { value: expandedValues = [] } = useControlled({
    value: expandedValuesFromProps,
    defaultValue: defaultExpandedValuesFromProps,
    onChange: onExpandedChangeFromProps,
  });

  return (
    <div className={classnames(`${prefix}-tree`, className)}>
      {JSON.stringify(data)}
      {JSON.stringify(expandedValues)}
    </div>
  );
};

export default Tree;
