import PropTypes from 'prop-types';
import { Text } from '../Text';
import style from './CentredText.module.css';

export const CentredText = ({ text }) =>
  <div className={style.centred}>
    <Text>
      {text}
    </Text>
  </div>;

CentredText.propTypes = {
  text: PropTypes.string,
};
