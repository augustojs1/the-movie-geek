import React from 'react';
import Input from './styles';
import { SEARCH_MOVIE } from '../../../services/api';
import useAxios from '../../../hooks/useAxios';

const SearchInput = () => {
  const [value, setValue] = React.useState('');
  const { data, request } = useAxios();

  React.useEffect(() => {
    async function searchMovie(movieTitle) {
      const url = SEARCH_MOVIE(movieTitle);
      await request(url);
    }

    if (value.length > 0) {
      searchMovie(value);
    }
  }, [value, request]);

  if (data)
    data.results.forEach((movie) => {
      console.log(movie);
    });

  return (
    <>
      <Input
        type="search"
        id="movie-search"
        value={value}
        placeholder="Search movie..."
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};

export default SearchInput;
