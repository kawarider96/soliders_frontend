import * as React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton, Menu, MenuItem, Box, Button, Divider, Typography } from '@mui/material';
import { workColumns, personalColumns, graduateColumns, contactColumns, baseColumns } from '../../SUPPORT/DATA/MotherDataSource';
import { useDispatch } from 'react-redux';
import { setColumnData } from '../../SUPPORT/redux/actions/soliderspageActions';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function ColumnMenu({id}) {
    const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{position:'sticky', top:0, backgroundColor:'#081c16', zIndex:10, display:'flex', justifyContent:'center', width:'100%', gap:'5px', padding:'5px', color:'white'}}>
            <WorkIcon/>
            <Typography variant='button'>Munkahelyi adatok</Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />

        {workColumns ? workColumns.map((column, index) => (
        <MenuItem key={index} onClick={() => {
            dispatch(setColumnData(id, column.label, column.table, column.column));
            handleClose();
          }}>
            {column.label}
        </MenuItem>
        )) : ''}

        <Divider sx={{ my: 0.5 }} />
        <Box sx={{position:'sticky', top:0, backgroundColor:'#081c16', zIndex:10, display:'flex', justifyContent:'center', width:'100%', gap:'5px', padding:'5px', color:'white'}}>
            <WorkIcon/>
            <Typography variant='button'>Személyes adatok</Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />

        {personalColumns ? personalColumns.map((column, index) => (
        <MenuItem key={index} onClick={() => {
          dispatch(setColumnData(id, column.label, column.table, column.column));
            handleClose();
          }}>
            {column.label}
        </MenuItem>
        )) : ''}

        <Divider sx={{ my: 0.5 }} />
        <Box sx={{position:'sticky', top:0, backgroundColor:'#081c16', zIndex:10, display:'flex', justifyContent:'center', width:'100%', gap:'5px', padding:'5px', color:'white'}}>
            <WorkIcon/>
            <Typography variant='button'>Végzettségi adatok</Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />

        {graduateColumns ? graduateColumns.map((column, index) => (
        <MenuItem key={index} onClick={() => {
          dispatch(setColumnData(id, column.label, column.table, column.column));
            handleClose();
          }}>
            {column.label}
        </MenuItem>
        )) : ''}

        <Divider sx={{ my: 0.5 }} />
        <Box sx={{position:'sticky', top:0, backgroundColor:'#081c16', zIndex:10, display:'flex', justifyContent:'center', width:'100%', gap:'5px', padding:'5px', color:'white'}}>
            <WorkIcon/>
            <Typography variant='button'>Kapcsolati adatok</Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />

        {contactColumns ? contactColumns.map((column, index) => (
        <MenuItem key={index} onClick={() => {
          dispatch(setColumnData(id, column.label, column.table, column.column));
            handleClose();
          }}>
            {column.label}
        </MenuItem>
        )) : ''}

        <Divider sx={{ my: 0.5 }} />
        <Box sx={{position:'sticky', top:0, backgroundColor:'#081c16', zIndex:10, display:'flex', justifyContent:'center', width:'100%', gap:'5px', padding:'5px', color:'white'}}>
            <WorkIcon/>
            <Typography variant='button'>Beosztási adatok</Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />

        {baseColumns ? baseColumns.map((column, index) => (
        <MenuItem key={index} onClick={() => {
          dispatch(setColumnData(id, column.label, column.table, column.column));
            handleClose();
          }}>
            {column.label}
        </MenuItem>
        )) : ''}

      </Menu>
    </div>
  );
}