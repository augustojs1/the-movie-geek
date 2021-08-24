import React from 'react';
import { Input, ResultWrapper, InputWrapper } from './styles';
import { SEARCH_MOVIE, POSTER_URL } from '../../../services/api';
import useAxios from '../../../hooks/useAxios';
import SearchResults from '../SearchResults/SearchResults';

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

  const maxResults = 20;

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
          data.results
            .slice(0, maxResults)
            .map((movie) => (
              <SearchResults
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                posterUrl={POSTER_URL + movie.poster_path}
              />
            ))}
      </ResultWrapper>
    </InputWrapper>
  );
};

export default SearchInput;
