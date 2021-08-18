import React from 'react';
import Input from './styles';

const SearchInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <Input
      type="search"
      id="movie-search"
      value={value}
      placeholder="Search movie..."
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default SearchInput;
