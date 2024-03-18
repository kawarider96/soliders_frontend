import { CircularProgress, FormControl, MenuItem, Select, InputLabel, Box, Checkbox, IconButton, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useAxiosFunctions } from "../../SUPPORT/SERVER/useAxiosFunctions";
import { setLoadingMode } from "../../SUPPORT/redux/actions/booleansActions";
import { setFilterOptions } from "../../SUPPORT/redux/actions/solidersActions";

export function FilterValues({id, action}) {
    const columnData = useSelector(state => state.soliders.columnData);
    const {getNames2} = useAxiosFunctions();
    const options = useSelector(state => state.options.options);
    const loadingMode = useSelector(state => state.booleans.loadingMode);
    const dispatch = useDispatch();
    const handleChange = (event) => {
    setAge(event.target.value);
  };

  
  const getOptions = (id) => {
    dispatch(setFilterOptions([]));
    dispatch(setLoadingMode(true));
    getNames2('uniqueValues', columnData[id]);
  }


    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Szűrő</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={options ? options : ''}
                label="Filter"
                onChange={handleChange}
                onOpen={() => getOptions(id)}
                
            >
                <Box sx={{minHeight:'200px', maxHeight:'200px', overflow:'auto'}}>
                {options ? options.map((item, index) => (
                <MenuItem key={index} >
                    <Checkbox/>{item}
                </MenuItem>
                )) : ''}
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
                </Box>
            </Select>
        </FormControl>
    )
}