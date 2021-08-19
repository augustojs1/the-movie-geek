import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Button from './styles';

const ButtonDetails = ({ movieId }) => {
  const navigate = useNavigate();

  function handleClick() {
    React.useEffect(() => {
      navigate(`/movie-details/${movieId}`);
    }, [navigate]);
  }

  return (
    <>
      <Link to={`/movie-details/${movieId}`} onClick={handleClick}>
        {' '}
        <Button>Details</Button>
      </Link>
    </>
  );
};

ButtonDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default ButtonDetails;
