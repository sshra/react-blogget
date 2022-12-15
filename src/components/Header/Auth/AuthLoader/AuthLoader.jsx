// import PropTypes from 'prop-types';
// import style from './AuthLoader.module.css';

import { RingLoader } from 'react-spinners';

export const AuthLoader = () => {
  console.log('AuthLoader');
  return (
    <RingLoader color='#cc6633' css={{ display: 'block' }} size={30} />
  );
};

AuthLoader.propTypes = {

};
