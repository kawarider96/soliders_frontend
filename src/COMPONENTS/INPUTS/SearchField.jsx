import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';
import { setFilterData } from '../../SUPPORT/redux/actions/soliderspageActions';
import {Autocomplete, FormControl, OutlinedInput, InputLabel, IconButton, InputAdornment, CircularProgress, Box, TextField, Collapse, ListItem, Button, ListItemButton, Typography, Paper } from '@mui/material';
import { DarkGlassBox, LightGlassBox } from '../../SUPPORT/STYLES/UniqueStyle';
import { FilterWindow } from '../HELPER_WINDOWS/FilterWindow';
import { setLoadingMode } from '../../SUPPORT/redux/actions/booleansActions';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../SUPPORT/STYLES/AppTheme';
import { useSearchInputFunctions } from '../../CUSTOM_FUNCTIONS/FILTER/useSearchInputFunctions';
import { SelectField } from './SelectField';
import { setOptions } from '../../SUPPORT/redux/actions/optionsActions';

export function SearchField() {
  const dispatch = useDispatch();
  const {paginationData, filterData, loadingMode, findData, handleChange, setListItem} = useSearchInputFunctions();
  const baseoptions = useSelector(state => state.options.options);
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;
  const {getColumnDatas} = useAxiosFunctions();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      if (active) {
        setOptions(baseoptions);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    console.log(filterData)
  },[filterData])

  return (
    <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
     <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 700 }}
      open={open}
      onChange={(event, newValue) => {
        dispatch(setFilterData([{
          table:'personal',
          column:'teljes_nev',
          operator:'LIKE',
          value:[newValue.teljes_nev]}]));
      }}
      onOpen={() => {
        getColumnDatas('uniqueValues', {table:'company', column:'teljes_nev'});
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.sztsz === value.sztsz}
      getOptionLabel={(option) => `${option.teljes_nev} ${option.sztsz} ${option.jogviszony_altipus} ${option.viselt_rendfokozat_rovid} ${option.ezred_rovid} ${option.zaszloalj_rovid}`}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Keresés"
          color='secondary'
          onChange={(event) => {
            // Frissíti a szűrési feltételeket az input mezőbe írt szöveggel
            const value = event.target.value;
            dispatch(setFilterData([{
              table: 'personal',
              column: 'teljes_nev',
              operator: 'LIKE',
              value: [value] // Az input mezőbe írt szöveg használata a szűrési feltétel értékeként
            }]));
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
    <ButtonSection/>
    </Box>
  );
}

const ButtonSection = () => {
  const {filterData} = useSearchInputFunctions();
  const {getSoliders} = useAxiosFunctions();
  const paginationData = useSelector(state => state.pagination);

  const search = () => {
    getSoliders(`filter?page=1`, filterData);
  }
  return (
    <Box sx={{display:'flex', gap:'10px'}}>
      <Button variant='contained' disabled>találatok:{paginationData.total}</Button>
      <Button variant='contained' onClick={search}>Keresés</Button>
    </Box>
  )
}