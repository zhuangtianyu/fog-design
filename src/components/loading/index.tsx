import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;

interface LoadingProps {
  className?: string;
  wrapperClassName?: string;
  loading?: boolean;
  icon?: React.ReactElement;
  tip?: React.ReactChild;
  children?: React.ReactElement;
}

const Loading: React.FC<LoadingProps> = props => {
  const {
    className,
    wrapperClassName,
    loading,
    icon,
    tip,
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
            <div className={`${prefix}-loading__tip`}>
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
};

export default Loading;
