import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { setPaginationData } from '../../SUPPORT/redux/actions/paginationActions';

export function SoliderPagination() {
const dispatch = useDispatch();
const paginationData = useSelector(state => state.pagination);

const handleChange = (event, value) => {
  const updatedPaginationData = {
    ...paginationData,
    currentPage: value,
  };
  dispatch(setPaginationData(updatedPaginationData));
};

if (paginationData.currentPage > 0) {
  return (
    <Stack spacing={2} sx={{padding:'10px'}}>
           {paginationData.currentPage > 0 && (
            <Pagination
              count={paginationData.lastPage}
              page={paginationData.currentPage}
              variant="outlined"
              shape="rounded"
              size="large"
              color="primary"
              showFirstButton
              showLastButton
              onChange={handleChange}
            />
          )}
    </Stack>
  );
}
}