import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import './index.less';

export interface SliderProps  {
  /** --skip */
  className?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const { prefix } = namespace;

export const Slider: React.FC<SliderProps> = props => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  } = props;

  const { value } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const offset = `${value * 100}%`;

  console.log(offset);

  return (
    <div className={classnames(`${prefix}-slider`, className)}>
      <div className={`${prefix}-slider__track`}>
        <div className={`${prefix}-slider__passed`} style={{ width: offset }} />
        <div className={`${prefix}-slider__handle`} style={{ left: offset }} />
      </div>
    </div>
  );
};

export default Slider;
