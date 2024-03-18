import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';
import { setFilterData } from '../../SUPPORT/redux/actions/soliderspageActions';
import { FormControl, OutlinedInput, InputLabel, IconButton, InputAdornment, CircularProgress, Box, TextField, Collapse, ListItem, Button, ListItemButton, Typography, Paper } from '@mui/material';
import { DarkGlassBox, LightGlassBox } from '../../SUPPORT/STYLES/UniqueStyle';
import { FilterWindow } from '../HELPER_WINDOWS/FilterWindow';
import { setLoadingMode } from '../../SUPPORT/redux/actions/booleansActions';
import { theme } from '../../SUPPORT/STYLES/AppTheme';
import { useSearchInputFunctions } from '../../CUSTOM_FUNCTIONS/FILTER/useSearchInputFunctions';

export function SelectField({fullList, paginationData, inputValue, setInputValue, filterData, table, column, searchfield, label, name, options, loadingMode, data, value, inputAction, listAction, icon}) {
  const dispatch = useDispatch();
  const {getSoliders, getColumnDatas} = useAxiosFunctions();
  const [collapse, setCollapse] = useState(false);
  let filteredOptions = [];
  let query = data ? data : {table:table, column:column};

  const getColumnData = () => {
    dispatch(setLoadingMode(true));
    getColumnDatas('uniqueValues', query);
    setCollapse(true);
  }

  const search = () => {
    const searchData = [{
      table:'workdata',
      column:inputValue.selectMode === 1 ? 'sztsz' : 'fullname',
      operator:inputValue.selectMode === 1 ? '=' : 'LIKE',
      value:inputValue.selectMode === 1 ? [inputValue.sztsz] : [inputValue.fullname]
    }];
    dispatch(setFilterData(searchData))
    getSoliders(`filter?page=${paginationData.currentPage}`, searchData);
  }

  const filterSoliders = () => {
    getSoliders(`filter?page=${paginationData.currentPage}`, filterData);
  }
  
  const reset = () => {
    getSoliders(`filter?page=${paginationData.currentPage}`);
    dispatch(setFilterData([]));
    setInputValue({
      sztsz:'',
      actual_rank:'',
      fullname:'',
      type:'',
      value:'',
      selectMode:'',
      });
  };

  if (options.length > 0) {
    if (searchfield) {
        // Ha a search igaz, több attribútum alapján szűrünk
        filteredOptions = options.filter(item => {
            const searchString = value.toLowerCase(); // Az input érték kisbetűsítése
            const combinedValue = `${item.fullname} ${item.sztsz}`.toLowerCase(); // A fullname és sztsz értékek összefűzése és kisbetűsítése
            return combinedValue.includes(searchString);
        });
    } else {
        filteredOptions = options;
    }
}

  return (
    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
      <Box sx={{width:'500px', position:'relative'}}>
        <FormControl 
        variant="outlined" 
        fullWidth
        onFocus={getColumnData} 
        onBlur={() => setCollapse(false)}
        >
            <InputLabel htmlFor="selectField">{label}</InputLabel>
            <OutlinedInput
              id="selectField"
              type='text'
              name={name} 
              value={value}
              onChange={inputAction}
              endAdornment={
                <InputAdornment position="end"  onClick={search}>
                    {icon}
                </InputAdornment>
              }
            />
          </FormControl>
          <Collapse in={collapse} sx={{overflow:'auto', position:'absolute', width:'100%', height:'400px !important', zIndex:999, backgroundColor:theme.palette.background.default}}>
          <Box >
              {loadingMode ?
                <CircularProgress
                size={60}
                thickness={5}
                sx={{
                color: 'green',
                position: 'absolute',
                top: '50%',
                left: '50%',
                translate: '-50%',
                marginTop: '-12px',
                marginLeft: '-12px',
                }}
                />
              : 
              filteredOptions.length > 0 ?
                filteredOptions.map((item, index) => (
                  <ListItemButton key={index} onClick={() => listAction(item)}>
                    {searchfield ? `${item.sztsz} ${item.fullname} ${item.type} ${item.actual_rank}` : item}
                  </ListItemButton>
                )) 
                :
                <Typography variant="body1">Nincs találat</Typography>
            }
          </Box>
          </Collapse>
      </Box>
      <Box>
      {fullList ? 
        <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
          <Paper elevation={15} sx={{color:theme.palette.text.secondary, display:'flex', minWidth:'100px', justifyContent:'center', alignItems:'center', padding:'7px'}}>
            {paginationData.total} találat
          </Paper>
          <Button variant='contained' onClick={search}>keresés</Button>
          <Button variant='contained' onClick={filterSoliders}>szűrés</Button>
          <Button variant='contained' onClick={reset}>reset</Button>
          <FilterWindow/>
        </Box>
        :
        <Box sx={{display:'flex', gap:'10px'}}>
          <Button variant='contained' onClick={search}>keresés</Button>
        </Box>}
      </Box>
   </Box>
  );
}