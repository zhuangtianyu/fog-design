import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
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

const getRoundedValue = (value: number) => Math.round(value * 100) / 100;

export const Slider: React.FC<SliderProps> = props => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const trackRef = useRef<HTMLDivElement>(null);

  const trackOffsetX = useRef<number>(0);

  const [dragging, setDragging] = useState<boolean>(false);

  const [dragValue, setDragValue] = useState<number>(0);

  const left = `${dragValue * 100}%`;

  useEffect(() => {
    setDragValue(getRoundedValue(value));
  }, [value]);

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);

    trackOffsetX.current = event.clientX - event.currentTarget.offsetLeft;
  };

  useEffect(() => {
    if (dragging) {
      const handleDrag = (event: MouseEvent) => {
        const diff = event.clientX - trackOffsetX.current;
        const nextDragValue = diff / trackRef.current.offsetWidth;

        switch (true) {
          case nextDragValue > 1:
            setDragValue(1);
            break;
          case nextDragValue < 0:
            setDragValue(0);
            break;
          default:
            setDragValue(getRoundedValue(nextDragValue));
        }
      };

      window.addEventListener('mousemove', handleDrag);

      return () => window.removeEventListener('mousemove', handleDrag);
    }
  }, [dragging]);

  useEffect(() => {
    if (dragging) {
      const handleDragEnd = () => {
        dragValue !== value && onChange(dragValue);

        setDragging(false);
      };

      window.addEventListener('mouseup', handleDragEnd);

      return () => window.removeEventListener('mouseup', handleDragEnd);
    }
  }, [dragging, dragValue, value]);

  return (
    <div className={classnames(`${prefix}-slider`, className)}>
      <div
        className={`${prefix}-slider__track`}
        ref={trackRef}
      >
        <div
          className={`${prefix}-slider__passed`}
          style={{ width: left }}
        />
        <div
          className={`${prefix}-slider__handle`}
          style={{ left }}
          tabIndex={-1}
          draggable={false}
          onMouseDown={handleDragStart}
        />
      </div>
    </div>
  );
};

export default Slider;
