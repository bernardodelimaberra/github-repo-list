import React from 'react';
import { Button } from 'primereact/button';

const Pagination = ({ onPageChange, links }) => {
  return (
    <span className="button-container">
      <Button onClick={() => onPageChange(links.first)} disabled={!(links && links.first)}>
        First
      </Button>
      <Button onClick={() => onPageChange(links.prev)} disabled={!(links && links.prev)}>
        Previous
      </Button>
      <Button onClick={() => onPageChange(links.next)} disabled={!(links && links.next)}>
        Next
      </Button>
      <Button onClick={() => onPageChange(links.last)} disabled={!(links && links.last)}>
        Last
      </Button>
    </span>
  );
};

export default Pagination;