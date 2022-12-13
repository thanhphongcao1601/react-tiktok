import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  leftIcon,
  rightIcon,
  disable,
  text,
  rounded,
  primary,
  outline,
  small,
  large,
  children,
  className,
  onClick,
  passProps,
}: {
  to?: string;
  href?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disable?: boolean;
  text?: boolean;
  rounded?: boolean;
  primary?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  children?: any;
  className?: any;
  onClick?: Function;
  passProps?: any;
}) {
  const classes = cx('wrapper', {
    [className]: className,
    disable,
    text,
    outline,
    primary,
    rounded,
    small,
    large,
  });

  const props: any = {
    onClick,
  };

  if (disable) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    return (
      <Link className={classes} {...props}>
        <span>{children}</span>
      </Link>
    );
  } else if (href) {
    props.href = href;
    <a className={classes} {...props}>
      <span>{children}</span>
    </a>;
  }

  return (
    <span className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </span>
  );
}

export default Button;
