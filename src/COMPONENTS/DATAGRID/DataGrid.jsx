import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const DataGridModul = ({soliders, columnData, selectedSoliders}) => {
    const {handleCheckboxChange} = useSoliderPageFunctions();
    const {getSelectedSolider, getSkills} = useAxiosFunctions();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

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
            <Button onClick={() => navigateDataPage(item.sztsz)}>Sztsz</Button>
            <Typography>Név</Typography>
            <Typography>Állomány</Typography>
            <Typography>Rendfokozat</Typography>
            <Typography>Kiképzettség</Typography>
        </Box>
        )) : 
        <Box sx={{overflow:'auto', height:'100%'}}>
            <Typography>Nincsenek katonák!</Typography>
        </Box>
        }
        </Box>
    )
};