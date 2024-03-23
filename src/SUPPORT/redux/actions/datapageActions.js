export const SET_DATA_MODUL = 'SET_DATA_MODUL';
export const UPDATE_WORK_DATA = 'UPDATE_WORK_DATA';
export const UPDATE_PERSONAL_DATA = 'UPDATE_PERSONAL_DATA';
export const UPDATE_CONTACT_DATA = 'UPDATE_CONTACT_DATA';
export const UPDATE_GRADUATE_DATA = 'UPDATE_GRADUATE_DATA';
export const SET_SHOOTING_SKILLS = 'SET_SHOOTING_SKILLS';
export const SET_MISSION_SKILLS = 'SET_MISSION_SKILS';
export const SET_COURSE_SKILLS = 'SET_COURSE_SKILLS';
export const SET_QUALIFICATION_SKILLS = 'SET_QUALIFICATION_SKILLS';
export const SET_CONTACT_DATA = 'SET_CONTACT_DATA';
export const SET_VEHICLE_CATEGORY = 'SET_VEHICLE_CATEGORY';
export const SET_PHYSICAL_STATE = 'SET_PHYSICAL_STATE';
export const SET_RESIDENCE_DATA = 'SET_RESIDENCE_DATA';
export const SET_UPDATED_SKILL = 'SET_UPDATED_SKILL';
export const SET_NEW_SKILL = 'SET_NEW_SKILL';
export const SET_SELECTED_SOLIDER = 'SET_SELECTED_SOLIDER';
export const UPDATE_SKILL_DATA = 'UPDATE_SKILL_DATA';
export const UPDATE_NEW_SKILL = 'UPDATE_NEW_SKILL';
export const SET_DRIVE_CATEGORY = 'SET_DRIVE_CATEGORY';

//TODO: KIVÁLASZOTT KATONA ADATAI PÉLDÁUL A DATAPAGEHEZ
export const setSelectedSolider = (selectedSolider) => ({
  type: SET_SELECTED_SOLIDER,
  payload: selectedSolider,
});

//TODO: DATAPAGE OLDALON AZ ADOTT KÁRTYA SZÁMÁT TARTALMAZZA, HOGY TUDJUK MELYIKET KELL MEGJELENITENI
export const setDataModul = (dataModul) => ({
    type: SET_DATA_MODUL,
    payload: dataModul,
});

//TODO: FRISSÍTETT WORKDATA ADATOK AMIKET A SZERVERRE KÜLDÜNK
export const updateWorkData = (fieldName, value) => {
    return {
      type: UPDATE_WORK_DATA,
      payload: { fieldName, value }
    };
  };
  
  //TODO: FRISSÍTETT PERSONALDATA ADATOK AMIKET A SZERVERRE KÜLDÜNK
  export const updatePersonalData = (fieldName, value) => {
    return {
      type: UPDATE_PERSONAL_DATA,
      payload: { fieldName, value }
    };
  };
  
  //TODO: FRISSÍTETT CONTACT ADATOK AMIKET A SZERVERRE KÜLDÜNK
  export const updateContactData = (fieldName, value) => {
    return {
      type: UPDATE_CONTACT_DATA,
      payload: { fieldName, value }
    };
  };
  
  //TODO: FRISSÍTETT GRADUATEDATA ADATOK AMIKET A SZERVERRE KÜLDÜNK
  export const updateGraduateData = (fieldName, value) => {
    return {
      type: UPDATE_GRADUATE_DATA,
      payload: { fieldName, value }
    };
  };
  
  //TODO: FRISSÍTETT SKILL ADATOK AMIKET A SZERVERRE KÜLDÜNK
  export const updateSkillData = (fieldName, value) => {
    return {
      type: UPDATE_SKILL_DATA,
      payload: { fieldName, value }
    };
  };

  //TODO: ÚJ SKILL ADATOK AMIKET A SZERVERRE KÜLDÜNK
  export const updateNewSkill = (fieldName, value) => {
    return {
      type: UPDATE_NEW_SKILL,
      payload: { fieldName, value }
    };
  };

  //TODO: LÖVÉSZET SKILLEK
  export const setShootingSkills = (shootingSkills) => ({
    type: SET_SHOOTING_SKILLS,
    payload: shootingSkills,
  });
  
  //TODO: MISSZIÓ SKILLEK
  export const setMissionSkills = (missionSkills) => ({
    type: SET_MISSION_SKILLS,
    payload: missionSkills,
  });
  
  //TODO: TANFOLYAM SKILLEK
  export const setCourseSkills = (courseSkills) => ({
    type: SET_COURSE_SKILLS,
    payload: courseSkills,
  });
  
  //TODO: SZAKKÉPESÍTÉS SKILLEK
  export const setQualificationSkills = (qualificationSkills) => ({
    type: SET_QUALIFICATION_SKILLS,
    payload: qualificationSkills,
  });

  //TODO: KAPCSOLATOK
  export const setContactData = (contactData) => ({
    type: SET_CONTACT_DATA,
    payload: contactData,
  });

  //TODO: LAKCIMEK
  export const setResidenceData = (residenceData) => ({
    type: SET_RESIDENCE_DATA,
    payload: residenceData,
  });

  //TODO: TIPUSISMERET KATEGÓRIÁK
  export const setVehicleCategory = (vehicleCategory) => ({
    type: SET_VEHICLE_CATEGORY,
    payload: vehicleCategory,
  });

  //TODO: JÁRMŰ KATEGORIAK
  export const setDriveCategory = (driveCategory) => ({
    type: SET_DRIVE_CATEGORY,
    payload: driveCategory,
  });

  //TODO: FIZIKAI FELMÉRÉSEK
  export const setPhysicalState = (physicalState) => ({
    type: SET_PHYSICAL_STATE,
    payload: physicalState,
  });
  
  //TODO: FRISSÍTETT SKILL ADAT AMIT A SZERVERRE KÜLDÜNK
  export const setUpdatedSkill = (updatedSkill) => ({
    type: SET_UPDATED_SKILL,
    payload: updatedSkill,
  });
  
  //TODO: ÚJ SKILL ADAT AMIT A SZERVERRE KÜLDÜNK
  export const setNewSkill = (newSkill) => ({
    type: SET_NEW_SKILL,
    payload: newSkill,
  });