import { SkillEditModul } from "./SkillEditModul";
import { SkillBaseModul } from "./SkillBaseModul";
import { Box, Button, Slide, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import UndoIcon from '@mui/icons-material/Undo';
import { setUpdatedSkill } from "../../../../SUPPORT/redux/actions/datapageActions";
import { useSelector, useDispatch } from "react-redux";
import { useAxiosFunctions } from "../../../../SUPPORT/SERVER/useAxiosFunctions";
import { useDataSource } from "../../../../SUPPORT/DATA/MotherDataSource";
import { Header } from "../HEADER/Header";
import { useState } from "react";

export const SkillItem = ({ dialogName, back, data, updatedSkill, dataModul, selectedSolider }) => {
    const dispatch = useDispatch();
    const {updateSkill} = useDataSource();
    const {update, deleteSkill} = useAxiosFunctions();
    const [editModeCheck, setEditModeCheck] = useState(false);
  
    const setEditMode = (skill) => {
      dispatch(setUpdatedSkill(skill));
      setEditModeCheck(true);
    };
  
    const resetEditMode = () => {
      setEditModeCheck(false);
      dispatch(setUpdatedSkill(null));
    };
  
    const updatingSkill = () => {
      update('updateSkillData', updatedSkill);
    };
  
    if (data.length > 0) {
    return (
        <Box>
            <Box>
                {data.map((item, index) => (
                updatedSkill && updatedSkill.id === item.id ?
                <Box key={index} sx={{display:'flex', alignItems:'center', padding:'10px', background:'rgba(255,186,47,0.1)', borderRadius:'10px', boxShadow:'-0.5px 4px 14px 0.5px #000000'}}>
                <SkillEditModul item={item} dialogName={dialogName} action={updateSkill} updatedSkill={updatedSkill} dataModul={dataModul} selectedSolider={selectedSolider}/>
                <Slide in={editModeCheck}>
                    <Box sx={{display:'flex', gap:'10px', alignItems:'flex-end'}}>
                    <Button variant="contained" onClick={updatingSkill} color="secondary"><SaveIcon/></Button>
                    <Button variant="contained" onClick={() => deleteSkill(`deleteSkill/${updatedSkill.id}`)} color="error"><DeleteForeverIcon/></Button>
                    <Button variant="contained" onClick={resetEditMode} color="warning"><UndoIcon/></Button>
                    </Box>
                </Slide>
                </Box>
                :
                <Box key={index} sx={{display:'flex', alignItems:'center',  padding:'10px'}}>
                    <SkillBaseModul item={item} dialogName={dialogName} dataModul={dataModul} selectedSolider={selectedSolider}/>
                    <Button variant="contained" onClick={() => setEditMode(item)} color="info"><EditIcon/></Button>
                </Box>
                ))}
            </Box>
        </Box>
  
    )} else {
      return (
      <Box>
          <Box>
            <Typography variant="button" sx={{color:'white', textTransform:'uppercase'}}>Nincsenek elmentett adatok.</Typography>
          </Box>
      </Box>
    )}
  }
