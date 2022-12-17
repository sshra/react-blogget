import PropTypes from 'prop-types';
import { Text } from '../Text';
import style from './CentredText.module.css';

export const CentredText = ({ height, text, children }) =>
  <div className={style.centred} style={{ [`height`]: height }}>
    {text && <Text>{text}</Text>}
    {children}
  </div>;

CentredText.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
};
