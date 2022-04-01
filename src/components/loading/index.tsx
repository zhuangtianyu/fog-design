import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;

export interface LoadingProps {
  className?: string;
  wrapperClassName?: string;
  loading?: boolean;
  icon?: React.ReactElement;
  tip?: React.ReactChild;
  tipBackground?: boolean;
  children?: React.ReactElement;
}

export const Loading: React.FC<LoadingProps> = props => {
  const {
    className,
    wrapperClassName,
    loading,
    icon,
    tip,
    tipBackground,
    children,
  } = props;

  const LoadingIcon = () => React.cloneElement(icon, {
    className: classnames(`${prefix}-loading__icon`, icon.props.className),
  });

  if (!children) return loading && (
    <div className={classnames(`${prefix}-loading`, className)}>
      <LoadingIcon />
    </div>
  );

  return (
    <div className={classnames(`${prefix}-loading-wrapper`, wrapperClassName)}>
      {loading && (
        <div className={classnames(`${prefix}-loading`, className)}>
          <LoadingIcon />
          {tip && (
            <div className={classnames({
              [`${prefix}-loading__tip`]: true,
              [`${prefix}-loading__tip--background`]: tipBackground,
            })}>
              {tip}
            </div>
          )}
        </div>
      )}
      {React.cloneElement(React.Children.only(children), {
        className: classnames(
          `${prefix}-loading__content`,
          React.Children.only(children).props.className,
        ),
      })}
    </div>
  );
};

Loading.defaultProps = {
  loading: true,
  icon: <Icon type="loading" />,
  tipBackground: true,
};

export default Loading;
