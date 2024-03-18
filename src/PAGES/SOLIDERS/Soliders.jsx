import { useSelector, useDispatch } from "react-redux";
import { useAxiosFunctions } from "../../SUPPORT/SERVER/useAxiosFunctions";
import { Typography, Box, Paper, Checkbox, Button, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { SoliderPagination } from "../../COMPONENTS/PAGINATION/Pagination";
import { setSelectedSoliders } from "../../SUPPORT/redux/actions/soliderspageActions";
import { FilterMenu } from "../../COMPONENTS/MENUS/FilterMenu";
import { SearchField } from "../../COMPONENTS/INPUTS/SearchField";
import { ColumnMenu } from "../../COMPONENTS/MENUS/ColumnMenu";
import { useSoliderPageFunctions } from "../../CUSTOM_FUNCTIONS/SOLIDERPAGE/useSoliderPageFunctions";
import { DarkGlassBox, LightGlassBox } from "../../SUPPORT/STYLES/UniqueStyle";
import { useNavigate } from "react-router-dom";
import { setLoadingMode } from "../../SUPPORT/redux/actions/booleansActions";

const Title = ({title}) => {
    return (
    <Box sx={{textAlign:'center', padding:'10px'}}>
        <Typography sx={{fontSize:'130%'}}>{title}</Typography>
    </Box>
    )
};

const Search = () => {
    return (
    <Box sx={{padding:'10px'}}>
        <SearchField fullList/>
    </Box>
    )
};

const Header = ({columnData}) => {
    return (
    <Box sx={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', padding:'10px', textTransform:'uppercase', border:'1px solid grey', justifyItems:'center' }}>
        {columnData.map((item) => (
        <Box key={item.id} sx={{ width:'100%', display:'flex',  alignItems:'center', flexWrap:'wrap', justifyContent:'flex-end'}}>
            <Typography >{item.label}</Typography>
            {item.id > 0 ? <ColumnMenu id={item.id}/> : ''}
            <FilterMenu id={item.id}/>
        </Box>
        ))}
    </Box>
    )
};

const DataGrid = ({soliders, columnData}) => {
    const selectedSoliders = useSelector(state => state.soliders.selectedSoliders);
    const {handleCheckboxChange} = useSoliderPageFunctions();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {getSelectedSolider, getSkills} = useAxiosFunctions();

    const navigateDataPage = (sztsz) => {
        dispatch(setLoadingMode(true));
        getSkills(`skills?sztsz=${sztsz}`)
        getSelectedSolider(`getsolider?id=${sztsz}`);
        navigate('/data');
    };

    return (
        <Box sx={{overflow:'auto', height:'100%'}}>
        {soliders ? soliders.map((item) => (
        <Box key={item.sztsz} sx={{ 
            display:'grid', 
            gridTemplateColumns:'repeat(6, 1fr)', 
            border:'1px solid grey', 
            alignItems:'center', 
            justifyContent:'center'}} >
            <Box>
                <Checkbox 
                checked={selectedSoliders.includes(item.sztsz)}
                onChange={() => handleCheckboxChange(item.sztsz)}
                />
                <Chip 
                variant="contained" 
                sx={{width:'100px'}}
                color={item.active === 1 ? 'success' : 'error'}
                label={item.active === 1 ? 'aktív' : 'leszerelt'}>
                </Chip>
            </Box>
            <Button onClick={() => navigateDataPage(item.sztsz)}>{item[columnData[1].column]}</Button>
            <Typography>{columnData[2].table ? item[columnData[2].table][columnData[2].column] : item[columnData[2].column]}</Typography>
            <Typography>{columnData[3].table ? item[columnData[3].table][columnData[3].column] : item[columnData[3].column]}</Typography>
            <Typography>{columnData[4].table ? item[columnData[4].table][columnData[4].column] : item[columnData[4].column]}</Typography>
            <Typography>{columnData[5].table ? item[columnData[5].table][columnData[5].column] : item[columnData[5].column]}</Typography>
        </Box>
        )) : ''}
        </Box>
    )
};

const Pagination = () => {
    return (
    <Box sx={{position:'fixed', bottom:'0px', width:'100%', display:'flex', justifyContent:'center'}}>
        <SoliderPagination/>
    </Box>
    )
};

export function Soliders() {
    const soliders = useSelector(state => state.soliders.soliders);
    const columnData = useSelector(state => state.soliders.columnData);
    const selectedSoliders = useSelector(state => state.soliders.selectedSoliders);
    const paginationData = useSelector(state => state.pagination);
    const filterData = useSelector(state => state.soliders.filterData);
    const {getSoliders} = useAxiosFunctions();

    useEffect(() => {
        getSoliders(`filter?page=${paginationData.currentPage}`, filterData);
      }, [paginationData.currentPage]);

    return (
    <Box sx={{display:'grid', gridTemplateRows:'8% 12% 10% 60% 10%', position:'relative', textAlign:'center', height:'100vh', overflow:'auto'}}>
        <Title title={'52. TERÜLETVÉDELMI ZÁSZLÓALJ'}/>
        <Search/>
        <Header columnData={columnData}/>
        <DataGrid soliders={soliders} selectedSoliders={selectedSoliders} columnData={columnData}/>
        <Pagination/>
    </Box>
    )
}


