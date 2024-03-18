import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';
import { setFilterData } from '../../SUPPORT/redux/actions/soliderspageActions';
import { FormControl, OutlinedInput, InputLabel, IconButton, InputAdornment, CircularProgress, Box, TextField, Collapse, ListItem, Button, ListItemButton, Typography, Paper } from '@mui/material';
import { DarkGlassBox, LightGlassBox } from '../../SUPPORT/STYLES/UniqueStyle';
import { FilterWindow } from '../HELPER_WINDOWS/FilterWindow';
import { setLoadingMode } from '../../SUPPORT/redux/actions/booleansActions';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../SUPPORT/STYLES/AppTheme';
import { useSearchInputFunctions } from '../../CUSTOM_FUNCTIONS/FILTER/useSearchInputFunctions';
import { SelectField } from './SelectField';

export function SearchField() {
  const {paginationData, filterData, options, loadingMode, findData, inputValue, setInputValue, handleChange, setListItem} = useSearchInputFunctions();

  return (
    <SelectField 
    fullList={true}
    searchfield={true}
    options={options} 
    label='keresés' 
    name={'value'}
    loadingMode={loadingMode} 
    data={findData} 
    value={inputValue.value} 
    inputValue={inputValue}
    setInputValue={setInputValue}
    inputAction={handleChange} 
    listAction={setListItem}
    paginationData={paginationData}ú
    filterData={filterData}
    icon={<SearchIcon/>}/>
  );
}