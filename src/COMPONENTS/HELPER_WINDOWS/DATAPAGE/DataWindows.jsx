import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Slide, Paper, TextField, Box, Button, Typography, Grow, Collapse, Fade, Zoom } from "@mui/material";
import { DarkGlassAppBar, DarkGlassBox, InputX, LightGlassBox } from "../../../SUPPORT/STYLES/UniqueStyle";
import { useDataSource } from "../../../SUPPORT/DATA/MotherDataSource";
import { theme } from "../../../SUPPORT/STYLES/AppTheme";
import { setDataMode, setSkillEditMode } from "../../../SUPPORT/redux/actions/booleansActions";
import { setDataModul, setUpdatedSkill } from "../../../SUPPORT/redux/actions/datapageActions";
import { updatePersonalData } from "../../../SUPPORT/redux/actions/datapageActions";
import { updateContactData } from "../../../SUPPORT/redux/actions/datapageActions";
import { updateGraduateData } from "../../../SUPPORT/redux/actions/datapageActions";
import { updateWorkData } from "../../../SUPPORT/redux/actions/datapageActions";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { SelectField } from "../../INPUTS/SelectField";
import { useSearchInputFunctions } from "../../../CUSTOM_FUNCTIONS/FILTER/useSearchInputFunctions";
import { useAxiosFunctions } from "../../../SUPPORT/SERVER/useAxiosFunctions";
import UndoIcon from '@mui/icons-material/Undo';

export function DataWindow() {
  const dataModul = useSelector(state => state.datapage.dataModul);
  const dataMode = useSelector(state => state.booleans.dataMode);
  const selectedSolider = useSelector(state => state.datapage.selectedSolider);
  const shootingSkills = useSelector(state => state.datapage.shootingSkills);
  const missionSkills = useSelector(state => state.datapage.missionSkills);
  const courseSkills = useSelector(state => state.datapage.courseSkills);
  const qualificationSkills = useSelector(state => state.datapage.qualificationSkills);
  const options = useSelector(state => state.options.options);
  const loadingMode = useSelector(state => state.booleans.loadingMode);
  const {soliderData, updateContact, updateGraduate, updatePersonal, updateWork} = useDataSource();
  const [windowOpen, setWindowOpen] = useState(false);
  const dispatch = useDispatch();
  const {update} = useAxiosFunctions();
  let title = '';

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

  switch(dataModul) {
    case 1:
      title = 'Munkahelyi adatok'
    break;
    case 2: 
      title = 'Személyes adatok'
    break;
    case 3:
      title = 'Kapcsolat'
    break;
    case 4:
      title = 'Végzettség'
    break;
    case 5:
      title = 'Lövészetek'
    break;
    case 6:
      title = 'Missziók'
    break;
    case 7:
      title = 'Tanfolyamok'
    break;
    case 8: 
      title = 'Szakképesítések'
      break;
    case 9: 
      title = 'Új lövészeti eredmény'
    break;
    case 10: 
      title = 'Új misszió'
    break;
    case 11: 
      title = 'Új tanfolyam'
    break;
    case 12: 
      title = 'Új szakképesítés'
    break;
  }
  return (
    <Slide direction="left" in={windowOpen}>
        <Box sx={{position:'fixed', height:'100vh', width:'100%', top:0, display:'grid', alignItems:'center'}}>
            <DarkGlassBox sx={{ padding:'50px', gap:'10px'}}>
              <Box sx={{padding:'20px', display:'flex', justifyContent:'space-around'}}>
                <Typography sx={{color: theme.palette.text.secondary, textTransform:'uppercase', fontSize:'160%'}}>{selectedSolider.fullname}</Typography>
                <Typography sx={{color: theme.palette.text.secondary, textTransform:'uppercase', fontSize:'160%'}}>{title}</Typography>
              </Box>
              
              <DataController 
              shootingSkills={shootingSkills} 
              missionSkills={missionSkills} 
              courseSkills={courseSkills} 
              qualificationSkills={qualificationSkills}
              dataMode={dataMode}
              dataModul={dataModul}
              options={options}
              loadingMode={loadingMode}
              selectedSolider={selectedSolider}
              back={back}
              /> 
           
            </DarkGlassBox>
        </Box>
    </Slide>
  )
};

export function DataController({dataMode, selectedSolider, dataModul, loadingMode, options, back}) {
  
  if (dataMode) {
  switch(dataModul) {
    case 1: return <EditItem dialogName={'workdata'} updateAction={'updateWork'} selectedSolider={selectedSolider} loadingMode={loadingMode} options={options} back={back}/>;
    case 2: return <EditItem dialogName={'personaldata'} updateAction={'updatePersonal'} selectedSolider={selectedSolider} loadingMode={loadingMode} options={options} back={back}/>;
    case 3: return <EditItem dialogName={'contact'} updateAction={'updateContact'} selectedSolider={selectedSolider} loadingMode={loadingMode} options={options} back={back}/>;
    case 4: return <EditItem dialogName={'graduatedata'} updateAction={'updateGraduate'} selectedSolider={selectedSolider} loadingMode={loadingMode} options={options} back={back}/>;
    case 5: return <SkillItem dialogName={'shootingskills'} updateAction={'updateSkillData'} back={back}/>;
    case 6: return <SkillItem dialogName={'missionskills'} updateAction={'updateSkillData'} back={back}/>;
    case 7: return <SkillItem dialogName={'courseskills'} updateAction={'updateSkillData'} back={back}/>;
    case 8: return <SkillItem dialogName={'qualificationskills'} updateAction={'updateSkillData'} back={back}/>;
    case 9: return <NewSkillModul dialogName={'newshooting'} updateAction={'updateSkillData'} back={back}/>;
    case 10: return <NewSkillModul dialogName={'newmission'} updateAction={'updateSkillData'} back={back}/>;
    case 11: return <NewSkillModul dialogName={'newcourse'} updateAction={'updateSkillData'} back={back}/>;
    case 12: return <NewSkillModul dialogName={'newqualification'} updateAction={'updateSkillData'} back={back}/>;
  }};

  if (!dataMode) {
    switch(dataModul) {
      case 1: return <BaseItem dialogName={'workdata'} back={back}/>;
      case 2: return <BaseItem dialogName={'personaldata'} back={back}/>;
      case 3: return <BaseItem dialogName={'contact'} back={back}/>;
      case 4: return <BaseItem dialogName={'graduatedata'} back={back}/>;
      case 5: return <SkillItem dialogName={'shootingskills'} updateAction={'updateSkillData'} back={back}/>;
      case 6: return <SkillItem dialogName={'missionskills'} updateAction={'updateSkillData'} back={back}/>;
      case 7: return <SkillItem dialogName={'courseskills'} updateAction={'updateSkillData'} back={back}/>;
      case 8: return <SkillItem dialogName={'qualificationskills'} updateAction={'updateSkillData'} back={back}/>;
      case 9: return <NewSkillModul dialogName={'newshooting'} updateAction={'updateSkillData'} back={back}/>;
      case 10: return <NewSkillModul dialogName={'newmission'} updateAction={'updateSkillData'} back={back}/>;
      case 11: return <NewSkillModul dialogName={'newcourse'} updateAction={'updateSkillData'} back={back}/>;
      case 12: return <NewSkillModul dialogName={'newqualification'} updateAction={'updateSkillData'} back={back}/>;
  }}
};

const EditItem = ({dialogName, loadingMode, options, back, updateAction, selectedSolider}) => {
  const {soliderData} = useDataSource();
  const dataSource = soliderData.find(item => item.dialogName === dialogName);
  const items = dataSource.items;
  const {update} = useAxiosFunctions();
  let data = [];

    return (
      <Box>
      <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'20px'}}>
        {items.map((item, index) => (
        <InputX
        key={index}
        label={item.label} 
        value={item.value} 
        name={item.name} 
        onChange={item.action}
        />))}
      </Box>
        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', gap:'10px', padding:'20px'}}>
          <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
          <Button variant="contained" color="secondary" onClick={() => update(updateAction, selectedSolider)}>Mentés</Button>
        </Box>
      </Box>
    )
};


const BaseItem = ({dialogName, back}) => {
  const {soliderData} = useDataSource();
  const dataSource = soliderData.find(data => data.dialogName === dialogName);
  const items = dataSource.items;

  return (
    <Box>
      <Box sx={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'20px'}}>
        {items.map((item, index) => (
        <InputX
        disabled
        key={index}
        label={item.label} 
        value={item.value} 
        name={item.name} 
        onChange={item.action}
        />))}
      </Box>
        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', gap:'10px', padding:'20px'}}>
          <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
        </Box>
      </Box>
  )
};

const SkillItem = ({dialogName, back}) => {
  const dispatch = useDispatch();
  const {soliderData, updateSkill} = useDataSource();
  const {update, deleteSkill} = useAxiosFunctions();
  const dataSource = soliderData.find(data => data.dialogName === dialogName);
  const Items = dataSource.items;
  const dataMode = useSelector(state => state.booleans.dataMode);
  const [editingSkill, setEditingSkill] = useState(null);
  const [editModeCheck, setEditModeCheck] = useState(false);
  const updatedSkill = useSelector(state => state.datapage.updatedSkill);

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

  if (Items.length > 0) {
  return (
    <Box>
      <Box sx={{display:'grid'}}>
          {Items.map((item, index) => (
            updatedSkill && updatedSkill.id === item.id ?
          <Box key={index} sx={{display:'flex', alignItems:'center'}}>
            <SkillEditModul item={item} dialogName={dialogName} action={updateSkill}/>
            <Slide in={editModeCheck}>
              <Box sx={{display:'flex', gap:'10px'}}>
                <Button variant="contained" onClick={updatingSkill} color="secondary"><SaveIcon/></Button>
                <Button variant="contained" onClick={() => deleteSkill(`deleteSkill/${updatedSkill.id}`)} color="error"><DeleteForeverIcon/></Button>
                <Button variant="contained" onClick={resetEditMode} color="warning"><UndoIcon/></Button>
              </Box>
            </Slide>
          </Box>
          :
          <Box key={index} sx={{display:'flex', alignItems:'center'}}>
            <SkillBaseModul item={item} dialogName={dialogName}/>
            <Button variant="contained" onClick={() => setEditMode(item)} color="info"><EditIcon/></Button>
          </Box>
          ))}
      </Box>
        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', gap:'10px', padding:'20px'}}>
          <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
        </Box>
    </Box>
  )} else {
    return (
    <Box sx={{with:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Box>
          <Typography variant="button" sx={{color:'white', textTransform:'uppercase'}}>Nincsenek elmentett adatok.</Typography>
        </Box>
        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', gap:'10px', padding:'20px'}}>
          <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
        </Box>
    </Box>
  )}
}

const SkillEditModul = ({item, dialogName, action}) => {
  const updatedSkill = useSelector(state => state.datapage.updatedSkill);
  let skill = [];

  switch(dialogName) {
    case 'shootingskills':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'lövészet neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'fegyver', value:updatedSkill.weapon, name:'weapon'},
        {label:'eredmény', value:updatedSkill.result, name:'result'},
        {label:'dátum', value:updatedSkill.date, name:'date'},
      ];
    break;
    case 'missionskills':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'misszió neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'beosztás', value:updatedSkill.post, name:'post'},
        {label:'kezdete', value:updatedSkill.date, name:'date'},
        {label:'vége', value:updatedSkill.end_date, name:'end_date'},
      ];
    break;
    case 'courseskills':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'tanfolyam neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'kezdete', value:updatedSkill.date, name:'date'},
        {label:'vége', value:updatedSkill.end_date, name:'end_date'},
      ];
    break;
    case 'qualificationskills':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'szakképesítés neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'kezdete', value:updatedSkill.date, name:'date'},
        {label:'vége', value:updatedSkill.end_date, name:'end_date'},
      ];
    break;
  }

  return (
    <Box sx={{display:'flex', gap:'10px', padding:'20px'}}>
      {skill.map((skillItem, index) => (
        <InputX
        key={index}
        label={skillItem.label} 
        value={skillItem.value} 
        name={skillItem.name} 
        onChange={action}
      />
      ))}
    </Box>
  )
}

const SkillBaseModul = ({item, dialogName}) => {
  let skill = [];

  switch(dialogName) {
    case 'shootingskills':
      skill = [
        {label:'szervező', value:item.place, name:'place'},
        {label:'lövészet neve', value:item.skill_name, name:'skill_name'},
        {label:'fegyver', value:item.weapon, name:'weapon'},
        {label:'eredmény', value:item.result, name:'result'},
        {label:'dátum', value:item.date, name:'date'},
      ];
    break;
    case 'missionskills':
      skill = [
        {label:'szervező', value:item.place, name:'place'},
        {label:'misszió neve', value:item.skill_name, name:'skill_name'},
        {label:'beosztás', value:item.post, name:'post'},
        {label:'kezdete', value:item.date, name:'date'},
        {label:'vége', value:item.end_date, name:'end_date'},
      ];
    break;
    case 'courseskills':
      skill = [
        {label:'szervező', value:item.place, name:'place'},
        {label:'tanfolyam neve', value:item.skill_name, name:'skill_name'},
        {label:'kezdete', value:item.date, name:'date'},
        {label:'vége', value:item.end_date, name:'end_date'},
      ];
    break;
    case 'qualificationskills':
      skill = [
        {label:'szervező', value:item.place, name:'place'},
        {label:'szakképesítés neve', value:item.skill_name, name:'skill_name'},
        {label:'kezdete', value:item.date, name:'date'},
        {label:'vége', value:item.end_date, name:'end_date'},
      ];
    break;
  }

  return (
    <Box sx={{display:'flex', gap:'10px', padding:'20px'}}>
      {skill.map((skillItem, index) => (
       <InputX
       disabled
       key={index}
       label={skillItem.label} 
       value={skillItem.value} 
       name={skillItem.name} 
     />
      ))}
    </Box>
  )
}

const NewSkillModul = ({item, dialogName, action, back}) => {
  const updatedSkill = useSelector(state => state.datapage.updatedSkill);
  const selectedSolider = useSelector(state => state.datapage.selectedSolider);
  const dispatch = useDispatch();
  const {updateSkill} = useDataSource();
  const {addNew} = useAxiosFunctions();

  useEffect(() => {
    if (dialogName === 'newshooting') {
      dispatch(setUpdatedSkill({
        sztsz:selectedSolider.sztsz,
        type:'lövészet',
        place:'',
        skill_name:'',
        weapon:'',
        result:'',
        date:'',
        end_date:'',
        post:'',
      }))
    }
    if (dialogName === 'newmission') {
      dispatch(setUpdatedSkill({
        sztsz:selectedSolider.sztsz,
        type:'misszió',
        place:'',
        skill_name:'',
        weapon:'',
        result:'',
        date:'',
        end_date:'',
        post:'',
      }))
    }
    if (dialogName === 'newcourse') {
      dispatch(setUpdatedSkill({
        sztsz:selectedSolider.sztsz,
        type:'tanfolyam',
        place:'',
        skill_name:'',
        weapon:'',
        result:'',
        date:'',
        end_date:'',
        post:'',
      }))
    }
    if (dialogName === 'newqualification') {
      dispatch(setUpdatedSkill({
        sztsz:selectedSolider.sztsz,
        type:'szakképesítés',
        place:'',
        skill_name:'',
        weapon:'',
        result:'',
        date:'',
        end_date:'',
        post:'',
      }))
    }
  },[]);

  let skill = [];
  if (updatedSkill) {
  switch(dialogName) {
    case 'newshooting':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'lövészet neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'fegyver', value:updatedSkill.weapon, name:'weapon'},
        {label:'eredmény', value:updatedSkill.result, name:'result'},
        {label:'dátum', value:updatedSkill.date, name:'date'},
      ];
    break;
    case 'newmission':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'misszió neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'beosztás', value:updatedSkill.post, name:'post'},
        {label:'kezdete', value:updatedSkill.date, name:'date'},
        {label:'vége', value:updatedSkill.end_date, name:'end_date'},
      ];
    break;
    case 'newcourse':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'tanfolyam neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'kezdete', value:updatedSkill.date, name:'date'},
        {label:'vége', value:updatedSkill.end_date, name:'end_date'},
      ];
    break;
    case 'newqualification':
      skill = [
        {label:'szervező', value:updatedSkill.place, name:'place'},
        {label:'szakképesítés neve', value:updatedSkill.skill_name, name:'skill_name'},
        {label:'kezdete', value:updatedSkill.date, name:'date'},
        {label:'vége', value:updatedSkill.end_date, name:'end_date'},
      ];
    break;
  }

  
  return (
    <Box>
      <Box sx={{display:'flex', gap:'10px', padding:'20px'}}>
        {skill.map((skillItem, index) => (
          <InputX
          key={index}
          label={skillItem.label} 
          value={skillItem.value} 
          name={skillItem.name} 
          onChange={updateSkill}
        />
        ))}
      </Box>
          <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end', gap:'10px', padding:'20px'}}>
            <Button variant="contained" color="secondary" onClick={back}>Vissza</Button>
            <Button variant="contained" color="success" onClick={() => addNew('addNewSkill', updatedSkill)}>mentés</Button>
          </Box>
    </Box>
  )}
}