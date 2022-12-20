// import PropTypes from 'prop-types';
// import style from './FrontPage.module.css';

import CentredText from '../../../UI/CentredText';
import { Text } from '../../../UI/Text';

export const FrontPage = () =>
  <CentredText height={300}>
    <Text As='h2's>The front page</Text>
    <p>Welcome!</p>
    <p>Please, select category.</p>
  </CentredText>;

FrontPage.propTypes = {};
