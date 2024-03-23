

export const NewSkillModul = ({item, dialogName, action, back}) => {
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