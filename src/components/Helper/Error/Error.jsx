import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './styles';

const Error = ({ errorLog }) => {
  if (!errorLog) return null;
  return <ErrorMessage>{errorLog}</ErrorMessage>;
};

Error.propTypes = {
  errorLog: PropTypes.isRequired,
};
export default Error;
