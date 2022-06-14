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

const getRangedValue = (value: number) => {
  switch (true) {
    case value > 1:
      return 1;
    case value < 0:
      return 0;
    default:
      return value;
  }
};

const getRangedRoundedValue = (value: number) => getRoundedValue(getRangedValue(value));

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

  const handleRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState<boolean>(false);

  const [dragValue, setDragValue] = useState<number>(0);

  const left = `${dragValue * 100}%`;

  const getSlideWidth = (event: React.MouseEvent<HTMLDivElement>) =>
    event.clientX - trackRef.current.getBoundingClientRect().left;

  useEffect(() => {
    setDragValue(getRangedRoundedValue(value));
  }, [value]);

  const handleDragStart = () => {
    setDragging(true);
  };

  useEffect(() => {
    if (dragging) {
      const handleDrag = (event: React.MouseEvent<HTMLDivElement>) => {
        const width = getSlideWidth(event);
        const nextDragValue = getRangedRoundedValue(width / trackRef.current.offsetWidth);

        setDragValue(nextDragValue);
      };

      window.addEventListener('mousemove', handleDrag as unknown as EventListenerOrEventListenerObject);

      return () => window.removeEventListener('mousemove', handleDrag as unknown as EventListenerOrEventListenerObject);
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

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === handleRef.current) return;

    const width = getSlideWidth(event);
    const nextDragValue = getRangedRoundedValue(width / trackRef.current.offsetWidth);

    setDragValue(nextDragValue);
    onChange(nextDragValue);
  };

  return (
    <div className={classnames(`${prefix}-slider`, className)}>
      <div
        className={`${prefix}-slider__track`}
        ref={trackRef}
        onClick={handleTrackClick}
      >
        <div
          className={`${prefix}-slider__passed`}
          style={{ width: left }}
        />
        <div
          className={`${prefix}-slider__handle`}
          ref={handleRef}
          style={{ left }}
          tabIndex={-1}
          draggable={false}
          onDragStart={() => false}
          onMouseDown={handleDragStart}
        />
      </div>
    </div>
  );
};

export default Slider;
