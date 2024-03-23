import { BaseItem } from "../ITEMS/BaseItem";
import { BaseEditItem } from "../ITEMS/BaseEditItem";
import { ContactItem } from "../ITEMS/ContactItem";
import { SkillItem } from "../ITEMS/SkillItem";
import { NewSkillModul } from "../ITEMS/NewSkillModul";
import { useEffect } from "react";

export function DataController({
    companies, graduates, works, personals, vehicleskills, vehicleCategories, shootings, missions, courses, 
    qualifications, physicalstates, contacts, residences, drives, dataMode, dataModul, selectedSolider, options, loadingMode, updatedSkill, back}) {
      
 
    if (dataMode) {
    switch(dataModul) {
      case 1: return <BaseEditItem data={companies} dialogName={'companies'} updateAction={'updateWork'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 2: return <BaseEditItem data={works} dialogName={'work'} updateAction={'updateWork'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 3: return <BaseEditItem data={personals} dialogName={'personal'} updateAction={'updatePersonal'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 4: return <SkillItem data={contacts} dialogName={'contact'} updatedSkill={updatedSkill} updateAction={'updateContact'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 5: return <BaseEditItem data={graduates} dialogName={'graduate'} updateAction={'updateGraduate'} dataModul={dataModul} selectedSolider={selectedSolider} loadingMode={loadingMode} options={options} back={back}/>;
      case 6: return <BaseEditItem data={vehicleskills} dialogName={'vehicle'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 7: return <SkillItem data={shootings} dialogName={'shootings'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 8: return <SkillItem data={missions} dialogName={'missions'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 9: return <SkillItem data={courses} dialogName={'courses'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 10: return <SkillItem data={qualifications} dialogName={'qualifications'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 11: return <SkillItem data={physicalstates} dialogName={'physicals'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 12: return <SkillItem data={residences} dialogName={'residences'} updatedSkill={updatedSkill} updateAction={'updateContact'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 13: return <SkillItem  data={vehicleCategories} dialogName={'vehicleCategories'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 14: return <SkillItem  data={drives} dialogName={'drives'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 15: return <NewSkillModul dialogName={'newShooting'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 16: return <NewSkillModul dialogName={'newMission'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 17: return <NewSkillModul dialogName={'newCourse'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 18: return <NewSkillModul dialogName={'newQualification'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 19: return <NewSkillModul dialogName={'newContact'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 20: return <NewSkillModul dialogName={'newResidence'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 21: return <NewSkillModul dialogName={'newVehiclecategory'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 22: return <NewSkillModul dialogName={'newDriveCategory'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 23: return <NewSkillModul dialogName={'newPhysicalState'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
    }};
  
    if (!dataMode) {
      switch(dataModul) {
      case 1: return <BaseItem data={companies} dialogName={'companies'} updateAction={'updateWork'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 2: return <BaseItem data={works} dialogName={'work'} updateAction={'updateWork'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 3: return <BaseItem data={personals} dialogName={'personal'} updateAction={'updatePersonal'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 4: return <SkillItem data={contacts} dialogName={'contact'} updatedSkill={updatedSkill} updateAction={'updateContact'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 5: return <BaseItem data={graduates} dialogName={'graduate'} updateAction={'updateGraduate'} dataModul={dataModul} selectedSolider={selectedSolider} loadingMode={loadingMode} options={options} back={back}/>;
      case 6: return <BaseItem data={vehicleskills} dialogName={'vehicle'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 7: return <SkillItem data={shootings} dialogName={'shootings'} updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 8: return <SkillItem data={missions} dialogName={'missions'} updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 9: return <SkillItem data={courses} dialogName={'courses'} updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 10: return <SkillItem data={qualifications} dialogName={'qualifications'} updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 11: return <SkillItem data={physicalstates} dialogName={'physicals'} updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 12: return <SkillItem data={residences} dialogName={'residences'} updatedSkill={updatedSkill} updateAction={'updateContact'} dataModul={dataModul} selectedSolider={selectedSolider} back={back}/>;
      case 13: return <SkillItem  data={vehicleCategories} dialogName={'vehicleCategories'} updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 14: return <SkillItem  data={drives} dialogName={'drives'}  updatedSkill={updatedSkill} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 15: return <NewSkillModul dialogName={'newShooting'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 16: return <NewSkillModul dialogName={'newMission'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 17: return <NewSkillModul dialogName={'newCourse'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 18: return <NewSkillModul dialogName={'newQualification'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 19: return <NewSkillModul dialogName={'newContact'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 20: return <NewSkillModul dialogName={'newResidence'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 21: return <NewSkillModul dialogName={'newVehiclecategory'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 22: return <NewSkillModul dialogName={'newDriveCategory'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
      case 23: return <NewSkillModul dialogName={'newPhysicalState'} updateAction={'updateSkillData'} back={back} dataModul={dataModul} selectedSolider={selectedSolider}/>;
    }}
  };