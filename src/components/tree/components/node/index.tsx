import * as React from 'react';
import classNames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import { ValueType, NodeType } from '../../index';
import './index.less';

const { prefix } = namespace;

export interface TreeNodeProps {
  node: NodeType;
  floorIndex: number;
  expandedValues: ValueType[];
  onExpandedToggle: (nodeValue: ValueType) => void;
};

const TreeNode: React.FC<TreeNodeProps> = props => {
  const { node, expandedValues, floorIndex, onExpandedToggle } = props;

  const isExpanded = expandedValues.includes(node.value);

  const hasChildren = Array.isArray(node.children) && !!node.children.length;

  const marginLeft = (floorIndex - 1 + (hasChildren ? 0 : 1)) * 22;

  return (
    <div className={`${prefix}-tree-node`}>
      <div
        className={`${prefix}-tree-node__title`}
        style={{ marginLeft }}
        onClick={() => hasChildren && onExpandedToggle(node.value)}
      >
        {hasChildren && (
          <Icon
            className={classNames({
              [`${prefix}-tree-node__icon`]: true,
              [`${prefix}-tree-node__icon--expanded`]: isExpanded,
            })}
            type="triangle-right-fill"
          />
        )}
        {node.title}
      </div>
      {isExpanded && hasChildren && (
        <div className={`${prefix}-tree-node__children`}>
          {node.children.map(item => (
            <TreeNode
              key={item.value}
              node={item}
              expandedValues={expandedValues}
              floorIndex={floorIndex + 1}
              onExpandedToggle={onExpandedToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
