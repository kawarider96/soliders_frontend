import { CardActionArea, CardMedia, Typography, Box, Card, Paper, Button, Slide, Chip, IconButton, Fab, Tooltip } from "@mui/material"
import { imagePath } from "../../SUPPORT/DATA/config"
import { useDispatch, useSelector } from "react-redux";
import { useDataSource } from "../../SUPPORT/DATA/MotherDataSource";
import { DarkGlassBox } from "../../SUPPORT/STYLES/UniqueStyle";
import { useEffect, useState } from "react";
import { DataWindow } from "../../COMPONENTS/HELPER_WINDOWS/DATAPAGE/DataWindows";
import { setDataMode } from "../../SUPPORT/redux/actions/booleansActions";
import { EditMode } from "../../COMPONENTS/HELPER_WINDOWS/EditMode";
import { useAxiosFunctions } from "../../SUPPORT/SERVER/useAxiosFunctions";
import { theme } from "../../SUPPORT/STYLES/AppTheme";
import { setDataModul } from "../../SUPPORT/redux/actions/datapageActions";
import { SearchField } from "../../COMPONENTS/INPUTS/SearchField";
import EditIcon from '@mui/icons-material/Edit';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';

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

const Header = ({ image, solider, dataMode, selectedSolider }) => {
    const dispatch = useDispatch();
    const {deactivateSolider} = useAxiosFunctions();

    return (
        <Box>
            <Paper sx={{textAlign:'center', padding:'10px', borderRadius:0}}>
                <Typography sx={{color:theme.palette.text.secondary}}>{`${selectedSolider.ezred_hosszu} ${selectedSolider.zaszloalj_hosszu}`}</Typography>
            </Paper>
            <Box sx={{padding:'10px'}}>
                <SearchField/>
            </Box>
            <Box sx={{width:'100%', padding:'10px', display:'flex', gap:'20px'}}>
                <Box>
                    <Avatar image={image}/>
                </Box>
                
                <Box sx={{width:'100%'}}>
                    <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gridTemplateRows:'repeat(2, 1fr)', alignContent:'space-evenly', gap:'10px'}}>
                        {solider.map((item, index) => (
                            <Paper key={index} elevation={15} sx={{padding:'10px'}}>
                                <Typography variant="caption" sx={{color:theme.palette.text.secondary}}>{item.label}</Typography>
                                <Typography variant="button" display="block" textTransform='uppercase' sx={{color:theme.palette.text.secondary}}>{item.value}</Typography> 
                            </Paper>
                        ))}
                    </Box>
                    <Box sx={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', padding:'10px', gap:'20px', width:'100%'}}>
                        <Box sx={{display:'grid', justifyItems:'center', gap:'10px', padding:'10px', background:'rgba(255,186,47,0.1)', borderRadius:'10px', boxShadow:'-0.5px 4px 14px 0.5px #000000'}}>
                            <Typography>ADAT MŰVELETEK</Typography>
                            <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                                <Tooltip title="SZERKESZTŐ MÓD">
                                    <Fab color="primary" onClick={() => dispatch(setDataMode(!dataMode))}>
                                        <EditIcon />
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="LESZERELÉS">
                                    <Fab color="error" onClick={() => deactivateSolider('deactivate', selectedSolider.sztsz, 0)}>
                                        <DangerousIcon />
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="FELSZERELÉS">
                                    <Fab color="success" onClick={() => deactivateSolider('deactivate', selectedSolider.sztsz, 1)}>
                                        <CheckCircleIcon />
                                    </Fab>
                                </Tooltip>
                            </Box>
                        </Box>
                        <Box sx={{display:'grid', justifyItems:'center', gap:'10px', padding:'10px', background:'rgba(255,186,47,0.1)', borderRadius:'10px', boxShadow:'-0.5px 4px 14px 0.5px #000000'}}>
                            <Typography>DOKUMENTUM MŰVELETEK</Typography>
                            <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                                <Tooltip title="MS WORD ADATLAP">
                                    <Fab color="primary">
                                    <img src="./word.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="ALAPFELKÉSZÍTÉS IGAZOLÁS (12 MODUL)">
                                    <Fab color="primary">
                                    <img src="./word.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="ALAPFELKÉSZÍTÉS IGAZOLÁS (EAP)">
                                    <Fab color="primary">
                                    <img src="./word.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="BÉKEMŰVELETI LŐGYAKORLAT IGAZOLÁS">
                                    <Fab color="primary">
                                    <img src="./word.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="ALAP LŐGYAKORLAT IGAZOLÁS">
                                    <Fab color="primary">
                                    <img src="./word.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                            </Box>
                        </Box>

                        <Box sx={{display:'grid', justifyItems:'center', gap:'10px', padding:'10px', background:'rgba(255,186,47,0.1)', borderRadius:'10px', boxShadow:'-0.5px 4px 14px 0.5px #000000'}}>
                            <Typography>ADATRÖGZÍTÉS</Typography>
                            <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                                <Tooltip title="LÖVÉSZET RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./gun.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="MISSZIÓ RÖGZÍTÉSE">
                                    <Fab color="primary">
                                        <img src="./nato.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="TANFOLYAM RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./course.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="SZAKKÉPESÍTÉS RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./qualification.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="KAPCSOLAT RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./contact.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                            </Box>
                        </Box>

                        <Box sx={{display:'grid', justifyItems:'center', gap:'10px', padding:'10px', background:'rgba(255,186,47,0.1)', borderRadius:'10px', boxShadow:'-0.5px 4px 14px 0.5px #000000'}}>
                            <Typography>ADATRÖGZÍTÉS</Typography>
                            <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                                <Tooltip title="LAKCÍM RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./residence.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="JOGOSÍTVÁNY KATEGÓRIA RÖGZÍTÉSE">
                                    <Fab color="primary">
                                        <img src="./driver.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="TÍPUSISMERET RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./vehicleIcon.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="FIZIKAI FELMÉRÉS RÖGZÍTÉSE">
                                    <Fab color="primary">
                                    <img src="./gym.png" height={'100%'}/>
                                    </Fab>
                                </Tooltip>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

/*
<Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(15))}>Lövészet rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(16))}>Misszió rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(17))}>Tanfolyam rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(18))}>Szakképesítés rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(19))}>Kapcsolat rögzítése</Button>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(20))}>lakcím rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(21))}>Jogosítvány kategória rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(22))}>Típusismeret rögzítése</Button>
                            <Button variant="contained" color='info' onClick={() => dispatch(setDataModul(23))}>Fizikai felmérés rögzítése</Button>
                        </Box>
*/
const Menu = () => {
    const dispatch = useDispatch();
    const menuItems = [
        {label:'szervezeti adatok', image:'company.png', action: () => dispatch(setDataModul(1))},
        {label:'munkahelyi adatok', image:'work_solider.png', action: () => dispatch(setDataModul(2))},
        {label:'személyes adatok', image:'home_solider.png', action: () => dispatch(setDataModul(3))},
        {label:'kapcsolat', image:'phone_solider.png', action: () => dispatch(setDataModul(4))},
        {label:'végzettség', image:'study_solider.png', action: () => dispatch(setDataModul(5))},
        {label:'Sofőr képességek', image:'vehicle.png', action: () => dispatch(setDataModul(6))},
        {label:'lövészetek', image:'shot_solider.png', action: () => dispatch(setDataModul(7))},
        {label:'missziók', image:'mission_solider.png', action: () => dispatch(setDataModul(8))},
        {label:'tanfolyamok', image:'course_solider.png', action: () => dispatch(setDataModul(9))},
        {label:'szakképesítések', image:'school_solider.png', action: () => dispatch(setDataModul(10))},
        {label:'fizikai felmérések', image:'training.png', action: () => dispatch(setDataModul(11))},
    ];
    return (
        <Box sx={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'10px', justifyContent:'space-between', padding:'20px'}}>
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
                        height="300px"
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
    const shootingSkills = useSelector(state => state.datapage.shootingSkills);
    const missionSkills = useSelector(state => state.datapage.missionSkills);
    const courseSkills = useSelector(state => state.datapage.courseSkills);
    const qualificationSkills = useSelector(state => state.datapage.qualificationSkills);
    const contactData = useSelector(state => state.datapage.contactData);
    const residenceData = useSelector(state => state.datapage.residenceData);
    const vehicleCategory = useSelector(state => state.datapage.vehicleCategory);
    const driveCategory = useSelector(state => state.datapage.driveCategory);
    const physicalState = useSelector(state => state.datapage.physicalState);
    const dataModul = useSelector(state => state.datapage.dataModul);
    const dataMode = useSelector(state => state.booleans.dataMode);
    const options = useSelector(state => state.options.options);
    const loadingMode = useSelector(state => state.booleans.loadingMode);
    const updatedSkill = useSelector(state => state.datapage.updatedSkill);
    const dispatch = useDispatch();
    const {getSkills} = useAxiosFunctions();
    
    useEffect(() => {
        dispatch(setDataModul(0));
    },[]) 

    
    if (!selectedSolider) {
        return (
            <Typography>NINCS KIVÁLASZTOTT KATONA</Typography>
        )
    } else {
        const companies = [
            {value:selectedSolider.ezred_rovid, label:'ezred rövid'},
            {value:selectedSolider.ezred_hosszu, label:'ezred hosszú'},
            {value:selectedSolider.zaszloalj_rovid, label:'zászlóalj rövid'},
            {value:selectedSolider.zaszloalj_hosszu, label:'zászlóalj hosszú'},
            {value:selectedSolider.megye, label:'megye'},
            {value:selectedSolider.allomany_kategoria, label:'állománykategória'},
            {value:selectedSolider.jogviszony_statusz, label:'jogviszony státusz'},
            {value:selectedSolider.jogviszony_tipus, label:'jogviszony típus'},
            {value:selectedSolider.jogviszony_altipus, label:'jogviszony altípus'},
            {value:selectedSolider.maximum_rendfokozat_hosszu, label:'rendszeresített rendfokozat hosszú'},
            {value:selectedSolider.maximum_rendfokozat_rovid, label:'rendszeresített rendfokozat rövid'},
            {value:selectedSolider.reszleg, label:'részleg'},
            {value:selectedSolider.pozicio_nev, label:'pozíció neve'},
            {value:selectedSolider.pozicio, label:'pozíció szám'},
        ];

        const graduates = [
            {value:selectedSolider.graduate.alapfelkeszites_foka, label:'alapfelkészítés'},
            {value:selectedSolider.graduate.alapfelkeszites_ideje, label:'ideje'},
            {value:selectedSolider.alapfelkeszites_igazolas_szama, label:'igazolás száma'},
            {value:selectedSolider.vegzettseg_foka, label:'iskolai végzettség'},
        ];

        const works = [
            {value:selectedSolider.work.profilkep, label:'profilkép'},
            {value:selectedSolider.work.viselt_rendfokozat_rovid, label:'viselt rendfokozat rövid'},
            {value:selectedSolider.work.viselt_rendfokozat_hosszu, label:'viselt rendfokozat hosszú'},
            {value:selectedSolider.work.szolgido_kezdete, label:'jogviszony kezdete'},
            {value:selectedSolider.work.szolgido_vege, label:'jogviszony érvényessége'},
            {value:selectedSolider.work.szolg_igazolvany, label:'szolgálati igazolvány'},
        ];

        const personals = [
            {value:selectedSolider.personal.tudomanyos_fokozat, label:'tudományos fokozat'},
            {value:selectedSolider.personal.vezeteknev, label:'vezetéknév'},
            {value:selectedSolider.personal.keresztnev, label:'keresztnév'},
            {value:selectedSolider.personal.nev_3, label:'név 3'},
            {value:selectedSolider.personal.nev_4, label:'név 4'},
            {value:selectedSolider.personal.szul_hely, label:'születési hely'},
            {value:selectedSolider.personal.szul_ido, label:'születési idő'},
            {value:selectedSolider.personal.szul_nev, label:'születési név'},
            {value:selectedSolider.personal.anyja_neve, label:'anyja neve'},
            {value:selectedSolider.personal.adoszam, label:'adószám'},
            {value:selectedSolider.personal.taj, label:'tajszám'},
            {value:selectedSolider.personal.szemelyi_szam, label:'személyi szám'},
            {value:selectedSolider.personal.szemelyi_igazolvany_szam, label:'személyi igazolvány szám'},
        ];

       const vehicleskills = [
            {label:'jogosítvány száma', value:selectedSolider.vehicle.jogositvany_szama, name:'jogositvany_szama'},
            {label:'jogosítvány érvényessége', value:selectedSolider.vehicle.jogositvany_ervenyessege, name:'jogositvany_ervenyessege'},
            {label:'sárgakártya száma', value:selectedSolider.vehicle.sargakartya_szama, name:'sargakartya_szama'},
            {label:'sárgakártya érvényessége', value:selectedSolider.vehicle.sargakartya_ervenyessege, name:'sargakartya_ervenyessege'},
            {label:'gépjármű parancsnoki száma', value:selectedSolider.vehicle.gk_pk_szama, name:'gk_pk_szama'},
            {label:'gépjármű parancsnoki érvényessége', value:selectedSolider.vehicle.gk_pk_ervenyessege, name:'gk_pk_ervenyessege'},
        ];

        const solider = [
            {value:selectedSolider.personal.teljes_nev, label:'név'},
            {value:selectedSolider.jogviszony_altipus, label:'állomány'},
            {value:selectedSolider.work.viselt_rendfokozat_rovid, label:'rendfokozat'},
            {value:selectedSolider.sztsz, label:'sztsz'},
            {value:selectedSolider.pozicio, label:'pozíció'},
            {value:selectedSolider.work.szolgido_kezdete, label:'jogviszony kezdete'},
            {value:selectedSolider.pozicio_nev, label:'beosztás'},
            {value:selectedSolider.graduate.alapfelkeszites_foka, label:'kiképzettség'},
        ];
        
        let image = imagePath + selectedSolider.work.profilkep;

       
        return (
            <Box sx={{height:'100vh', overflow:'auto', position:'relative'}}>
                <Header image={image} solider={solider} dataMode={dataMode} selectedSolider={selectedSolider}/>
                <Menu/>
                <DataWindow 
                companies={companies} graduates={graduates} works={works} personals={personals}
                vehicleskills={vehicleskills} vehicleCategories={vehicleCategory} shootings={shootingSkills}
                missions={missionSkills} courses={courseSkills} qualifications={qualificationSkills} physicalstates={physicalState}
                contacts={contactData} residences={residenceData} drives={driveCategory} dataMode={dataMode} dataModul={dataModul}
                selectedSolider={selectedSolider} options={options} loadingMode={loadingMode} updatedSkill={updatedSkill}/>
                <EditMode/>
            </Box>
        )
    }
}

