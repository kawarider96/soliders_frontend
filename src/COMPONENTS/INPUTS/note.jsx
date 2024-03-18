import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';
import { setFilterData } from '../../SUPPORT/redux/actions/soliderspageActions';
import { CircularProgress, Box, TextField, Collapse, ListItem, Button, ListItemButton, Typography, Paper } from '@mui/material';
import { DarkGlassBox, LightGlassBox } from '../../SUPPORT/STYLES/UniqueStyle';
import { FilterWindow } from '../HELPER_WINDOWS/FilterWindow';
import { setLoadingMode } from '../../SUPPORT/redux/actions/booleansActions';

export function SearchField({fullList}) {
  const dispatch = useDispatch();
  const paginationData = useSelector(state => state.pagination);
  const options = useSelector(state => state.options.options);
  const selectedSoliders = useSelector(state => state.soliders.selectedSoliders);
  const filterData = useSelector(state => state.soliders.filterData);
  const {getSoliders, getColumnDatas} = useAxiosFunctions();
  const [collapse, setCollapse] = useState(false);
  const loadingMode = useSelector(state => state.booleans.loadingMode);
  const [inputValue, setInputValue] = useState({
    sztsz:'',
    actual_rank:'',
    fullname:'',
    type:'',
    value:'',
    selectMode:'',
  });
  const findData = {
    table:'workdata',
    column:'fullname',
  };

  const getColumnData = () => {
    dispatch(setLoadingMode(true));
    getColumnDatas('uniqueValues', findData);
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

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue({
      sztsz:'',
      actual_rank: '',
      fullname: newValue,
      type: '',
      value: newValue,
      selectMode:0,
    });
  };

  const setListItem = (item) => {
    setInputValue({
      sztsz:item.sztsz,
      actual_rank:item.actual_rank,
      fullname:item.fullname,
      type:item.type,
      value:`${item.sztsz} ${item.fullname} ${item.type} ${item.actual_rank}`,
      selectMode:1,
    })
  };

  if (options) {
      const filteredOptions = options.filter(item => {
      const searchString = inputValue.value.toLowerCase(); // Az input érték kisbetűsítése
      const combinedValue = `${item.fullname} ${item.sztsz}`.toLowerCase(); // A fullname és sztsz értékek összefűzése és kisbetűsítése
      return combinedValue.includes(searchString);
    });

  return (
    <Box sx={{display:'flex', gap:'10px'}}>
      <Box sx={{width:'500px', position:'relative'}}>
          <TextField 
            fullWidth
            onFocus={getColumnData} 
            onBlur={() => setCollapse(false)}
            label="keresés" variant="filled"
            name='value' value={inputValue.value}
            onChange={handleChange}
          />
          <Collapse in={collapse} sx={{width:'100%', position:'absolute', zIndex:999}}>
            <LightGlassBox sx={{width:'100%', height:'400px', overflow:'auto', }}>
            {loadingMode && (
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
                    )}
            {filteredOptions.length === 0 ? (
              <Typography variant="body1">Nincs találat</Typography>
            ) : (
              filteredOptions.map((item, index) => (
                <ListItemButton key={index} onClick={() => setListItem(item)}>
                  {item.sztsz} {item.fullname} {item.type} {item.actual_rank}
                </ListItemButton>
              ))
            )}
            </LightGlassBox>
          </Collapse>
      </Box>
      {fullList ? 
        <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
          <Paper elevation={15} sx={{display:'flex', minWidth:'100px', justifyContent:'center', alignItems:'center', padding:'7px'}}>
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
  );}
}