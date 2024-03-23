import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Slide, Box, Button, Typography } from "@mui/material";
import { DarkGlassBox, InputX } from "../../../SUPPORT/STYLES/UniqueStyle";
import { useDataSource } from "../../../SUPPORT/DATA/MotherDataSource";
import { theme } from "../../../SUPPORT/STYLES/AppTheme";
import { setDataModul } from "../../../SUPPORT/redux/actions/datapageActions";
import { setUpdatedSkill } from "../../../SUPPORT/redux/actions/datapageActions";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import UndoIcon from '@mui/icons-material/Undo';
import { useAxiosFunctions } from "../../../SUPPORT/SERVER/useAxiosFunctions";
import { DataController } from "./CONTROLLER/DataController";
import { Header } from "./HEADER/Header";

export function DataWindow({ 
  companies, graduates, works, personals, vehicleskills, vehicleCategories, shootings, missions, courses, 
  qualifications, physicalstates, contacts, residences, drives, dataMode, dataModul, selectedSolider, options, loadingMode, updatedSkill }) {
  const dispatch = useDispatch();
  const {update} = useAxiosFunctions();
  const [windowOpen, setWindowOpen] = useState(false);


  useEffect(() => {
    if (dataModul > 0) {
      setWindowOpen(true);
    } else {
      setWindowOpen(false);
    }
  },[dataModul]);

  const back = () => {
    dispatch(setDataModul(0));
  }

  
  return (
    <Slide direction="left" in={windowOpen}>
        <Box sx={{position:'fixed', height:'100vh', width:'100%', top:0, display:'grid', alignItems:'center'}}>
            <DarkGlassBox sx={{height:'80%', display:'grid', gridTemplateRows:'10% 80% 10%'}}>
              <Header dataModul={dataModul} selectedSolider={selectedSolider}/>
              <Box sx={{height:'100%', overflow:'auto', display:'grid', alignItems:'center'}}>
              <DataController
              companies={companies} 
              graduates={graduates}
              works={works}
              personals={personals}
              vehicleskills={vehicleskills}
              vehicleCategories={vehicleCategories}
              shootings={shootings}
              missions={missions}
              courses={courses} 
              qualifications={qualifications}
              physicalstates={physicalstates}
              contacts={contacts}
              residences={residences}
              drives={drives}
              dataMode={dataMode}
              dataModul={dataModul}
              selectedSolider={selectedSolider}
              options={options}
              loadingMode={loadingMode}
              updatedSkill={updatedSkill}
              back={back}
              /> 
              </Box>
              <ActionModuleController dataMode={dataMode} dataModul={dataModul} back={back} selectedSolider={selectedSolider}/>
            </DarkGlassBox>
        </Box>
    </Slide>
  )
};

const ActionModuleController = ({ dataMode, dataModul, selectedSolider, back }) => {

  if (dataMode) {
    switch(dataModul) {
      case 4: return <ContactActionModule back={back}/>
      case 6: return <VehicleActionModule back={back}/>
      case 12: return <ContactActionModule back={back}/>
      case 13: return <VehicleActionModule back={back}/>
      case 14: return <VehicleActionModule back={back}/>
      default: return <BasicEditActionModule back={back}/>
    }
  }

  if (!dataMode) {
    switch(dataModul) {
      case 4: return <ContactActionModule back={back}/>
      case 6: return <VehicleActionModule back={back}/>
      case 12: return <ContactActionModule back={back}/>
      case 13: return <VehicleActionModule back={back}/>
      case 14: return <VehicleActionModule back={back}/>
      default: return <BasicActionModule back={back}/>
    }
  }
  
}

const BasicEditActionModule = ({ back }) => {
  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'10px', padding:'0% 10% 0% 10%'}}>
      <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
      <Button variant="contained" color="secondary">Mentés</Button>
    </Box>
  )
}

const BasicActionModule = ({ back }) => {
  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'10px', padding:'0% 10% 0% 10%'}}>
      <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
    </Box>
  )
}

const VehicleActionModule = ({ back }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'10px', padding:'0% 10% 0% 10%'}}>
      <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(setDataModul(6))}>Sofőr képességek</Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(setDataModul(13))}>Gépjármű típusismeretek</Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(setDataModul(14))}>Jogosítvány kategóriák</Button>
    </Box>
  )
}

const ContactActionModule = ({ back }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'10px', padding:'0% 10% 0% 10%'}}>
      <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(setDataModul(4))}>Kapcsolat adatok</Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(setDataModul(12))}>Lakcímek</Button>
    </Box>
  )
}