import React from 'react';

const usePagination = () => {
  const [page, setPage] = React.useState(1);

  return { page, setPage };
};

export default usePagination;
