import { Box, Button } from "@mui/material"
import { SkillItem } from "./SkillItem"

export const ContactItem = ({ dialogName, dialogName2, data, data2, updatedSkill, updateAction, dataModul, selectedSolider, back }) => {
 
    return (
        <Box sx={{maxHeight:'500px',}}>
            <Box sx={{maxHeight:'450px', overflow:'auto', padding:'20px'}}>
                <SkillItem dialogName={dialogName} data={data} updatedSkill={updatedSkill} updateAction={updateAction} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>
                <SkillItem dialogName={dialogName2} data={data2} updatedSkill={updatedSkill} updateAction={updateAction} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>
            </Box>
                
         </Box>
    )
   
  }