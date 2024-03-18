/*import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';
import { setFilterData } from '../../SUPPORT/redux/actions/soliderspageActions';
import { Box, TextField, Collapse, ListItem, Button, ListItemButton, Typography, Paper } from '@mui/material';
import { DarkGlassBox, LightGlassBox } from '../../SUPPORT/STYLES/UniqueStyle';
import { FilterWindow } from '../HELPER_WINDOWS/FilterWindow';
import { InputX } from '../../SUPPORT/STYLES/UniqueStyle';
import { setLoadingMode } from '../../SUPPORT/redux/actions/booleansActions';

export function DataSelectMenu({label, value, name, table}) {
  const dispatch = useDispatch();
  const paginationData = useSelector(state => state.pagination);
  const options = useSelector(state => state.options.options);
  const selectedSoliders = useSelector(state => state.soliders.selectedSoliders);
  const filterData = useSelector(state => state.soliders.filterData);
  const {getSoliders, getColumnDatas} = useAxiosFunctions();
  const [collapse, setCollapse] = useState(false);
  const data = {table:table, column:name};
  
  const handleChange = (event) => {
    const newValue = event.target.value;
  };

  const setListItem = () => {
    getColumnDatas('uniqueValues', data);
    setCollapse(true);
  };

  if (options) {

  return (
    <Box sx={{display:'flex', gap:'10px'}}>
      <Box sx={{width:'500px', position:'relative'}}>
          <InputX
            fullWidth
            onFocus={setListItem} 
            onBlur={() => setCollapse(false)}
            label={label} variant="filled"
            name={name} value={value}
            onChange={handleChange}
          />
          <Collapse in={collapse} sx={{width:'100%', position:'absolute', zIndex:999}}>
            <LightGlassBox sx={{width:'100%', height:'400px', overflow:'auto', }}>
            {options.length === 0 ? (
              <Typography variant="body1">Nincs találat</Typography>
            ) : (
              options.map((item, index) => (
                <ListItemButton key={index}>
                  {item}
                </ListItemButton>
              ))
            )}
            </LightGlassBox>
          </Collapse>
      </Box>
   </Box>
  )};
}*/