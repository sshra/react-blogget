import PropTypes from 'prop-types';
import React from 'react';
import { useToken } from '../hooks/useToken';

export const tokenContext = React.createContext('');

export const TokenContextProvider = (props) => {
  const [token, delToken] = useToken();
  return (
    <tokenContext.Provider value={{ token, delToken }}>
      {props.children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

