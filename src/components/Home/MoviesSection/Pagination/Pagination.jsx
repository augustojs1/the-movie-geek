import React from 'react';
import PropTypes from 'prop-types';
import {
  PaginationWrapper,
  PaginationItemWrapper,
  PaginationItem,
  PageLink,
} from './styles';

const Pagination = ({ setPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 20; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PaginationItemWrapper>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PageLink onClick={() => setPage(number)}>{number}</PageLink>
          </PaginationItem>
        ))}
      </PaginationItemWrapper>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
