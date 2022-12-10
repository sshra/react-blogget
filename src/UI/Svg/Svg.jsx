import PropTypes from 'prop-types';
// import style from './Svg.module.css';

export const Svg = (props) => {
  const {
    SvgComponent,
    className,
  } = props;
  return <SvgComponent className={className}/>;
};

Svg.propTypes = {
  SvgComponent: PropTypes.object,
  className: PropTypes.string,
};
