// import PropTypes from 'prop-types';
// import style from './Page404.module.css';
import CentredText from '../../../UI/CentredText';
import { Text } from '../../../UI/Text';

export const Page403 = () =>
  <CentredText height={300}>
    <Text As='h2' color='orange'>403</Text>
    <div>You have to be authorized to view the page!</div>
  </CentredText>;

Page403.propTypes = {

};
