import * as React from 'react';
import { useState, useContext, useRef, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Transition from '@components/transition';
import { isFunction } from '@utils/index';
import { FormContext } from '../../context';
import { getFormItemValueGetter, getFormItemValueEmpty } from '../../adapter';
import './index.less';

const { prefix } = namespace;

export interface FormItemProps {
  /** --skip */
  className?: string;
  label?: React.ReactChild;
  labelWidth?: number;
  name?: string;
  initialValue?: any;
  children?: React.ReactChild | React.ReactChild[];
}

const FormItem: React.FC<FormItemProps> = props => {
  const {
    className,
    label,
    labelWidth,
    name,
    initialValue,
    children,
  } = props;

  const [element, setElement] = useState<React.ReactElement | null>(null);

  const initializedRef = useRef<boolean>(false);

  const formContext = useContext(FormContext);

  const errorVisible = useMemo(() => {
    if (name && element) {
      const value = formContext.getFieldValue(name);
      const empty = getFormItemValueEmpty(element, value);

      return empty;
    }

    return false;
  }, [name, element, formContext]);

  useEffect(() => {
    if (
      name &&
      initialValue !== undefined &&
      !initializedRef.current
    ) {
      formContext.setFieldValue(name, initialValue);
    }

    initializedRef.current = true;
  }, [name, initialValue]);

  const labelStyle = useMemo<React.CSSProperties>(() => {
    if (formContext.layout === 'vertical') return {};

    if (formContext.layout === 'horizontal') return {
      width: labelWidth || formContext.labelWidth,
    };
  }, [formContext.layout, formContext.labelWidth]);

  const enhanceElement = (element: React.ReactElement) => {
    const getFormItemValue = getFormItemValueGetter(element);

    if (!getFormItemValue) return element;

    return React.cloneElement(element, {
      key: element.key,
      error: errorVisible,
      value: formContext.getFieldValue(name),
      onChange: (...args) => {
        const nextValue = getFormItemValue(...args);

        formContext.setFieldValue(name, nextValue);
        isFunction(element.props.onChange) && element.props.onChange(...args);
      },
    });
  };

  useEffect(() => {
    const getElement = (children: React.ReactChild | React.ReactChild[]) => {
      if (!name) return null;

      if (Array.isArray(children)) {
        if (!children.length) return null;

        return getElement(children[0]);
      }

      if (!React.isValidElement(children)) return null;

      if ((children as React.ReactElement).type === FormItem) {
        return getElement((children as React.ReactElement).props.children);
      }

      return children;
    };

    const nextElement = getElement(children);

    setElement(nextElement);
  }, [children, name]);

  const renderChildren = (children: React.ReactChild | React.ReactChild[]) => {
    if (!name) return children;
    if (!Array.isArray(children)) return renderChildren([children]);
    if (!children.length) return null;

    const [firstChild, ...restChildren] = children;

    if (Array.isArray(firstChild)) return [renderChildren(firstChild), ...restChildren];
    if (!React.isValidElement(firstChild)) return firstChild;
    if ((firstChild as React.ReactElement).type === FormItem) return children;

    return [enhanceElement(firstChild as React.ReactElement), ...restChildren];
  };

  return (
    <div className={classnames(`${prefix}-form__item`, className)}>
      <div
        className={`${prefix}-form__item-label`}
        style={labelStyle}
      >
        {label}
      </div>
      <div className={`${prefix}-form__item-content`}>
        {renderChildren(children)}
        <Transition
          visible={errorVisible}
          timeout={300}
          beforeEnter={`${prefix}-form__item-error--before-enter`}
          entering={`${prefix}-form__item-error--entering`}
          entered={`${prefix}-form__item-error--entered`}
          leaving={`${prefix}-form__item-error--leaving`}
          unmountNodeAfterLeave
        >
          <div className={`${prefix}-form__item-error`}>
            Please input {name}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default FormItem;
