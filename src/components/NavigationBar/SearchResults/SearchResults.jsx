import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { ResultItem, ResultItemTitle, ResultItemPoster } from './style';

const SearchResults = ({ movieId, title, posterUrl }) => {
  const navigate = useNavigate();

  function handleClick() {
    React.useEffect(() => {
      navigate(`/movie-details/${movieId}`);
    }, [navigate]);
  }

  return (
    <ResultItem>
      <Link to={`/movie-details/${movieId}`} onClick={handleClick}>
        {' '}
        <ResultItemPoster src={posterUrl} alt={title} />{' '}
        <ResultItemTitle>{title}</ResultItemTitle>{' '}
      </Link>
    </ResultItem>
  );
};

SearchResults.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
};

export default SearchResults;
