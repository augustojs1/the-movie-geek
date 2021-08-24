import React from 'react';
import { Input, ResultWrapper, InputWrapper } from './styles';
import { SEARCH_MOVIE, POSTER_URL } from '../../../services/api';
import useAxios from '../../../hooks/useAxios';
import MovieCard from '../../Home/MoviesSection/MovieCard/MovieCard';

const SearchInput = () => {
  const [value, setValue] = React.useState('');
  const { data, request } = useAxios();

  React.useEffect(() => {
    async function searchMovie(movieTitle) {
      const url = SEARCH_MOVIE(movieTitle);
      await request(url);
    }

    if (value.length > 0) {
      searchMovie(value.toLowerCase());
    }
  }, [value, request]);

  if (data)
    data.results.forEach((movie) => {
      console.log(movie);
    });

  const limitRender = 10;

  return (
    <InputWrapper>
      <Input
        type="search"
        id="movie-search"
        value={value}
        placeholder="Search movie..."
        onChange={(event) => setValue(event.target.value)}
      />
      <ResultWrapper>
        {data &&
          data.results.slice(0, limitRender).map((movie) => (
            <li>
              <MovieCard
                movieId={movie.id}
                posterUrl={POSTER_URL + movie.poster_path}
                originalTitle={movie.title}
              />
            </li>
          ))}
      </ResultWrapper>
    </InputWrapper>
  );
};

export default SearchInput;
