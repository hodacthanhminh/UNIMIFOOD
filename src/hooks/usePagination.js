// libs
import { useState, useEffect } from 'react';

export const usePagination = ({
  current,
  itemsPerPage,
  // totalItem,
}) => {
  const [currentPage, setCurrentPage] = useState(current);
  // const totalPage = Math.ceil(totalItem / itemsPerPage);
  const beginItem = (currentPage - 1) * itemsPerPage;
  const endItem = beginItem + itemsPerPage;
  const [pageSize] = useState(itemsPerPage);

  const handleOnChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {}, [pageSize, currentPage]);

  return [
    currentPage,
    pageSize,
    beginItem,
    endItem,
    handleOnChangePage,
  ];
};
