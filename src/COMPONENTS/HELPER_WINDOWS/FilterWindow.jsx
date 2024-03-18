import { Box, Chip, IconButton, Slide, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setFilterData } from "../../SUPPORT/redux/actions/soliderspageActions";
import { useFilterFunctions } from "../../CUSTOM_FUNCTIONS/FILTER/useFilterFunctions";
import { DarkGlassBox } from "../../SUPPORT/STYLES/UniqueStyle";
import { LightGlassBox } from "../../SUPPORT/STYLES/UniqueStyle";

export function FilterWindow() {
    const filterData = useSelector(state => state.soliders.filterData);
    const [allValues, setAllValues] = useState([]);
    const dispatch = useDispatch();
    const {removeEmptyValues, checkOperator} = useFilterFunctions();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (allValues.length > 0) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    },[allValues]);

    
    useEffect(() => {
        if (filterData.length > 0) {
            const valuesArray = filterData.reduce((acc, currFilter, filterIndex) => {
                return acc.concat(currFilter.value.map((value, valueIndex) => ({
                    filterIndex: filterIndex,
                    valueIndex: valueIndex,
                    value: value
                })));
            }, []);
            setAllValues(valuesArray);
        } else {
            setAllValues([]);
        }
    }, [filterData]);

    const deleteFilter = (filterIndex, valueIndex) => {
        const newFilterData = filterData.map((filter, index) => {
            if (index === filterIndex) {
                const newValueArray = filter.value.filter((val, idx) => idx !== valueIndex);
                return { ...filter, value: newValueArray };
            }
            return filter;
        });

        removeEmptyValues(newFilterData);
        checkOperator(newFilterData);
        dispatch(setFilterData(newFilterData));
    };

    return (
    <Slide in={checked}>
        <LightGlassBox sx={{padding:'10px',display:'flex', flexWrap:'wrap', gap:'5px', position:'absolute', maxWidth:'20%', maxHeight:'120px', overflow:'auto', right:'10px', top:'10px', zIndex:999}}>
            {allValues.map((item, index) => (
                <Chip key={index} label={item.value} onDelete={() => deleteFilter(item.filterIndex, item.valueIndex)}/>
            ))}
        </LightGlassBox>
    </Slide>
    )
} 