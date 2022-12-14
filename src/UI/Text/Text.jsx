import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    bold,
    medium,
    onClick,
    rel,
    target,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
    { [style.center]: center },
    { [style.bold]: bold },
    { [style.medium]: medium }
  );

  return <As
    className={classes}
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  onClick: PropTypes.func,
};
