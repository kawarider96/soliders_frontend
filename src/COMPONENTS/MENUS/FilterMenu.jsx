import * as React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton, CircularProgress, Menu, MenuItem, Box, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingMode } from '../../SUPPORT/redux/actions/booleansActions';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';
import { setFilterData } from '../../SUPPORT/redux/actions/soliderspageActions';
import { useEffect } from 'react';
import { useFilterFunctions } from '../../CUSTOM_FUNCTIONS/FILTER/useFilterFunctions';
import { setOptions } from '../../SUPPORT/redux/actions/optionsActions';

export function FilterMenu({id}) {
    const dispatch = useDispatch();
    const options = useSelector(state => state.options.options);
    const filterData = useSelector(state => state.soliders.filterData);
    const loadingMode = useSelector(state => state.booleans.loadingMode);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const columnData = useSelector(state => state.soliders.columnData);
    const {getColumnDatas} = useAxiosFunctions();
    const {updateFilterData} = useFilterFunctions();
   
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getOptions = (id) => {
    dispatch(setOptions([]));
    dispatch(setLoadingMode(true));
    getColumnDatas('uniqueValues', columnData[id]);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    getOptions(id);
  };

  return (
    <Box >
      <IconButton
        id="basic-button"
        onClick={handleClick}
      >
        <FilterAltIcon/>
      </IconButton>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{height:'400px', padding:'50px'}}
      >
       {loadingMode && (
        <CircularProgress
        size={60}
        thickness={5}
        sx={{
        color: 'green',
        }}
        />
        )}
        {options ? options.map((option, index) => (
        <MenuItem key={index}>
           <Checkbox 
            checked={filterData.some(filter => filter.value.includes(option) && filter.table === (columnData[id].table || 'workdata') && filter.column === columnData[id].column)}
            onChange={() => updateFilterData(option, id)}
           /> {option}
        </MenuItem>
        )) : ''}
        
      </Menu>
    </Box>
  );
}