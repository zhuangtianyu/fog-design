import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Tooltip from '@components/tooltip';
import useControlled from '@hooks/useControlled';
import './index.less';

export interface SliderProps  {
  /** --skip */
  className?: string;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const { prefix } = namespace;

const getRoundedValue = (value: number) => Math.round(value * 10000) / 10000;

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

const getDragValueByStep = (value: number, step?: number) => {
  if (!step) return getRangedRoundedValue(value);

  const remainder = value % step;

  if (remainder < step * 0.5) {
    return getRangedRoundedValue(Math.max(0, value - remainder));
  } else {
    return getRangedRoundedValue(Math.min(1, value - remainder + step));
  }
};

export const Slider: React.FC<SliderProps> = props => {
  const {
    className,
    step,
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

  const [entered, setEntered] = useState<boolean>(false);

  const [dragging, setDragging] = useState<boolean>(false);

  const [dragValue, setDragValue] = useState<number>(0);

  const left = `${dragValue * 100}%`;

  const getSlideWidth = (clientX: number) => clientX - trackRef.current.getBoundingClientRect().left;

  useEffect(() => {
    setDragValue(getRangedRoundedValue(value));
  }, [value]);

  const handleMouseDown = () => {
    setDragging(true);
  };

  useEffect(() => {
    if (dragging) {
      const handleMouseMove = (event: MouseEvent) => {
        const width = getSlideWidth(event.clientX);
        const trackWidth = trackRef.current.offsetWidth;
        const nextDragValue = getDragValueByStep(width / trackWidth, step);

        setDragValue(nextDragValue);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [dragging, step]);

  useEffect(() => {
    if (dragging) {
      const handleMouseUp = () => {
        dragValue !== value && onChange(dragValue);

        setDragging(false);
      };

      window.addEventListener('mouseup', handleMouseUp);

      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [dragging, dragValue, value]);

  const handleTouchStart = () => {
    setDragging(true);
  };

  useEffect(() => {
    if (dragging) {
      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length === 1) {
          const width = getSlideWidth(event.touches[0].clientX);
          const trackWidth = trackRef.current.offsetWidth;
          const nextDragValue = getDragValueByStep(width / trackWidth, step);

          setDragValue(nextDragValue);
        }
      };

      window.addEventListener('touchmove', handleTouchMove);

      return () => window.removeEventListener('touchmove', handleTouchMove);
    }
  }, [dragging, step]);

  useEffect(() => {
    if (dragging) {
      const handleTouchEnd = () => {
        dragValue !== value && onChange(dragValue);

        setDragging(false);
      };

      window.addEventListener('touchend', handleTouchEnd);

      return () => window.removeEventListener('touchend', handleTouchEnd);
    }
  }, [dragging, dragValue, value]);

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === handleRef.current) return;

    const width = getSlideWidth(event.clientX);
    const trackWidth = trackRef.current.offsetWidth;
    const nextDragValue = getDragValueByStep(width / trackWidth, step);

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
        <Tooltip
          visible={dragging || entered}
          content={left}
          getPopupMountNode={() => handleRef.current}
        >
          <div
            className={`${prefix}-slider__handle`}
            ref={handleRef}
            style={{ left }}
            tabIndex={-1}
            draggable={false}
            onDragStart={() => false}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Slider;
