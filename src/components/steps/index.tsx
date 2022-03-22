import React, { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import './index.less';

export type ValueType = number | string;

export interface Step {
  value: ValueType;
  title: string;
  description: React.ReactChild;
}

export interface StepsProps  {
  className?: string;
  steps: Step[];
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: (value: ValueType) => void;
  vertical?: boolean;
}

const { prefix } = namespace;

const Steps: React.FC<StepsProps> = props => {
  const {
    className,
    steps,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    vertical,
  } = props;

  const { value } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const activeIndex = useMemo(() => steps.findIndex(item => item.value === value), [steps, value]);

  if (!Array.isArray(steps) || !steps.length) return null;

  return (
    <div className={classnames(className, {
      [`${prefix}-steps`]: true,
      [`${prefix}-steps--vertical`]: vertical,
    })}>
      {steps.map((item, index) => (
        <div
          className={classnames({
            [`${prefix}-steps__item`]: true,
            [`${prefix}-steps__item--active`]: index <= activeIndex,
          })}
          key={item.value}
        >
          <div className={`${prefix}-steps__dot`}>
            <div
              className={classnames({
                [`${prefix}-steps__index`]: true,
                [`${prefix}-steps__index--filled`]: index === activeIndex,
              })}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && vertical && (
              <div
                className={classnames({
                  [`${prefix}-steps__connector`]: true,
                  [`${prefix}-steps__connector--active`]: index <= activeIndex - 1,
                })}
              />
            )}
          </div>
          <div className={`${prefix}-steps__content`}>
            <div className={`${prefix}-steps__header`}>
              <div className={`${prefix}-steps__title`}>
                {item.title}
              </div>
              {index < steps.length - 1 && !vertical && (
                <div
                  className={classnames({
                    [`${prefix}-steps__connector`]: true,
                    [`${prefix}-steps__connector--active`]: index <= activeIndex - 1,
                  })}
                />
              )}
            </div>
            <div className={`${prefix}-steps__description`}>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Steps.defaultProps = {};

export default Steps;
