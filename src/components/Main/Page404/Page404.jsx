// import PropTypes from 'prop-types';
// import style from './Page404.module.css';
import CentredText from '../../../UI/CentredText';
import { Text } from '../../../UI/Text';

export const Page404 = () =>
  <CentredText height={300}>
    <Text As='h2' color='orange'>404</Text>
    <div>Page is not found!</div>
  </CentredText>;

Page404.propTypes = {

};
