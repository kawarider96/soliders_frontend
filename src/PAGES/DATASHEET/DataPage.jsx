import { CardActionArea, CardMedia, Typography, Box, Card, Paper, Button, Slide, Chip } from "@mui/material"
import { imagePath } from "../../SUPPORT/DATA/config"
import { useDispatch, useSelector } from "react-redux";
import { useDataSource } from "../../SUPPORT/DATA/MotherDataSource";
import { DarkGlassBox } from "../../SUPPORT/STYLES/UniqueStyle";
import { useEffect, useState } from "react";
import { DataController, DataWindow } from "../../COMPONENTS/HELPER_WINDOWS/DATAPAGE/DataWindows";
import { setDataMode } from "../../SUPPORT/redux/actions/booleansActions";
import { EditMode } from "../../COMPONENTS/HELPER_WINDOWS/EditMode";
import { useAxiosFunctions } from "../../SUPPORT/SERVER/useAxiosFunctions";
import { theme } from "../../SUPPORT/STYLES/AppTheme";
import { setDataModul } from "../../SUPPORT/redux/actions/datapageActions";

const Avatar = ({image}) => {

    return (
        <Box>
            <Card>
                <CardActionArea>
                    <Paper elevation={20} sx={{width:'400px'}}>
                        <CardMedia
                            component="img"
                            height="400px"
                            image={image}
                        />
                     </Paper>
                </CardActionArea>
            </Card>
        </Box>
    )
}

const Header = ({image, solider}) => {
    const dispatch = useDispatch();
    const dataMode = useSelector(state => state.booleans.dataMode);
    const selectedSolider = useSelector(state => state.datapage.selectedSolider);
    const {deactivateSolider} = useAxiosFunctions();

    return (
        <Box>
            <Paper sx={{textAlign:'center', padding:'10px', borderRadius:0}}>
                <Typography sx={{color:theme.palette.text.secondary}}>5. BAUER GYULA TERÜLETVÉDELMI EZRED 52. TERÜLETVÉDELMI ZÁSZLÓALJ ÖNKÉNTES TERÜLETVÉDELMI TARTALÉKOS ÁLLOMÁNY</Typography>
            </Paper>

            <Box sx={{width:'100%', padding:'10px', display:'flex', gap:'20px'}}>
                <Box>
                    <Avatar image={image}/>
                </Box>
                
                <Box>
                    <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gridTemplateRows:'repeat(2, 1fr)', alignContent:'center', alignContent:'space-evenly', gap:'10px'}}>
                        {solider.map((item, index) => (
                            <Paper key={index} elevation={15} sx={{padding:'10px'}}>
                                <Typography variant="caption" sx={{color:theme.palette.text.secondary}}>{item.label}</Typography>
                                <Typography variant="button" display="block" textTransform='uppercase' sx={{color:theme.palette.text.secondary}}>{item.value}</Typography> 
                            </Paper>
                        ))}
                    </Box>
                    <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', padding:'10px', gap:'20px'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                            <Button variant="contained" onClick={() => dispatch(setDataMode(!dataMode))}>SZERKESZTŐ MÓD</Button>
                            <Button variant="contained" onClick={() => deactivateSolider('deactivate', selectedSolider.sztsz, 0)}>LESZERELÉS</Button>
                            <Button variant="contained" onClick={() => deactivateSolider('deactivate', selectedSolider.sztsz, 1)}>FELSZERELÉS</Button>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(9))}>Lövészet rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(10))}>Misszió rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(11))}>Tanfolyam rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(12))}>Szakképesítés rögzítése</Button>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                            <Button variant="contained">MS WORD ADATLAP</Button>
                            <Button variant="contained">KIKÉPZETTSÉGI IGAZOLÁS</Button>
                            <Button variant="contained">BÉKEMŰVELETI LÖVÉSZET IGAZOLÁS</Button>
                            <Button variant="contained">ALAP LŐGYAKORLAT IGAZOLÁS</Button>
                        </Box>
                        
                    
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const Menu = () => {
    const dispatch = useDispatch();
    const menuItems = [
        {label:'munkahelyi adatok', image:'work_solider.png', action: () => dispatch(setDataModul(1))},
        {label:'személyes adatok', image:'home_solider.png', action: () => dispatch(setDataModul(2))},
        {label:'kapcsolat', image:'phone_solider.png', action: () => dispatch(setDataModul(3))},
        {label:'végzettség', image:'study_solider.png', action: () => dispatch(setDataModul(4))},
        {label:'lövészetek', image:'shot_solider.png', action: () => dispatch(setDataModul(5))},
        {label:'missziók', image:'mission_solider.png', action: () => dispatch(setDataModul(6))},
        {label:'tanfolyamok', image:'course_solider.png', action: () => dispatch(setDataModul(7))},
        {label:'szakképesítések', image:'school_solider.png', action: () => dispatch(setDataModul(8))},
    ];
    return (
        <Box sx={{ display:'flex', gap:'10px', justifyContent:'space-between', padding:'20px'}}>
            {menuItems.map((item, index) => (
             <Card key={index} sx={{ 
                transition:'0.2s ease',  
                ':hover': {
                    transform: 'translateY(-50px)', 
                },
             }}>
                <CardActionArea sx={{display:'grid', justifyItems:'center'}} onClick={item.action}>
                    <Typography variant="button" textTransform='uppercase' sx={{color:theme.palette.text.secondary}}>{item.label}</Typography>
                    <CardMedia
                        component="img"
                        height="400px"
                        image={item.image}
                    />
                </CardActionArea>
            </Card>   
            ))}
        </Box>
    )
}

export function DataPage() {
    const selectedSolider = useSelector(state => state.datapage.selectedSolider);
    const loadingMode = useSelector(state => state.booleans.loadingMode);
    const dispatch = useDispatch();
    const {getSkills} = useAxiosFunctions();
    const {solider} = useDataSource();

    useEffect(() => {
        dispatch(setDataModul(0));
    },[]) 

    if (!selectedSolider) {
        return (
            <Typography>NINCS KIVÁLASZTOTT KATONA</Typography>
        )
    } else {
        let image = imagePath + selectedSolider.image;

        return (
            <Box sx={{height:'100vh', overflow:'auto', position:'relative'}}>
                <Header image={image} solider={solider}/>
                <Menu/>
                <DataWindow/>
                <EditMode/>
            </Box>
        )
    }
}