import { Box } from "@mui/material";
import { Header } from "../HEADER/Header";
import { InputX } from "../../../../SUPPORT/STYLES/UniqueStyle";

export const SkillEditModul = ({ item, dialogName, action, updatedSkill, dataModul, selectedSolider }) => {
    let skill = [];
  
    switch(dialogName) {
        case 'contact':
            skill = [
            {label:'típus', value:updatedSkill.contact_type, name:'contact_type'},
            {label:'kapcsolat', value:updatedSkill.contact, name:'contact'},
            ];
        break;
        case 'shootings':
            skill = [
            {label:'szervező', value:updatedSkill.szervezo, name:'szervezo'},
            {label:'lövészet típusa', value:updatedSkill.loveszet_tipus, name:'loveszet_tipus'},
            {label:'fegyver', value:updatedSkill.fegyver_tipus, name:'fegyver_tipus'},
            {label:'eredmény', value:updatedSkill.eredmeny, name:'eredmeny'},
            {label:'dátum', value:updatedSkill.datum, name:'datum'},
            {label:'igazolás száma', value:updatedSkill.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'missions':
            skill = [
            {label:'hely', value:updatedSkill.misszio_helye, name:'misszio_helye'},
            {label:'misszió neve', value:updatedSkill.misszio_neve, name:'misszio_neve'},
            {label:'beosztás', value:updatedSkill.beosztas, name:'beosztás'},
            {label:'kezdete', value:updatedSkill.kezdete, name:'kezdete'},
            {label:'dátum', value:updatedSkill.vege, name:'vege'},
            {label:'igazolás száma', value:updatedSkill.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'courses':
            skill = [
            {label:'szervező', value:updatedSkill.szervezo, name:'szervezo'},
            {label:'tanfolyam neve', value:updatedSkill.tanfolyam_neve, name:'tanfolyam_neve'},
            {label:'dátum', value:updatedSkill.datum, name:'datum'},
            {label:'igazolás száma', value:updatedSkill.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'qualifications':
            skill = [
            {label:'szervező', value:updatedSkill.szervezo, name:'szervezo'},
            {label:'szakképesítés neve', value:updatedSkill.kepesites_neve, name:'kepesites_neve'},
            {label:'dátum', value:updatedSkill.datum, name:'datum'},
            {label:'igazolas száma', value:updatedSkill.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'physicals':
            skill = [
            {label:'korcsoport', value:updatedSkill.korcsoport, name:'korcsoport'},
            {label:'felsőtest gyak. tipusa', value:updatedSkill.felsotest_tipus, name:'felsotest_tipus'},
            {label:'felsőtest gyak. darabszám', value:updatedSkill.felsotest_mennyiseg, name:'felsotest_mennyiseg'},
            {label:'felsőtest gyak. pontszáma', value:updatedSkill.felsotest_pont, name:'felsotest_pont'},
            {label:'felülés darabszám', value:updatedSkill.torzs_mennyiseg, name:'torzs_mennyiseg'},
            {label:'felülés pontszáma', value:updatedSkill.torzs_pont, name:'torzs_pont'},
            {label:'futás ideje', value:updatedSkill.futas_ido, name:'futas_ido'},
            {label:'futás pontszáma', value:updatedSkill.futas_pont, name:'futas_pont'},
            {label:'fizikai eredmény pontszáma', value:updatedSkill.ossz_pont, name:'ossz_pont'},
            {label:'felmérőlap száma', value:updatedSkill.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'residences':
            skill = [
            {label:'lakhely típus', value:updatedSkill.lakhely_tipus, name:'lakhely_tipus'},
            {label:'ország', value:updatedSkill.orszag, name:'orszag'},
            {label:'megye', value:updatedSkill.megye, name:'megye'},
            {label:'irányítószám', value:updatedSkill.iranyitoszam, name:'iranyitoszam'},
            {label:'város', value:updatedSkill.varos, name:'varos'},
            {label:'utcanév', value:updatedSkill.utca_neve, name:'utca_neve'},
            {label:'közterület jellege', value:updatedSkill.kozterulet_jellege, name:'kozterulet_jellege'},
            {label:'házszám', value:updatedSkill.hazszam, name:'hazszam'},
            ];
        break;
        case 'vehicleCategories':
            skill = [
            {label:'típus ismeret, jármű:', value:updatedSkill.tipusismeret, name:'tipusismeret'},
            {label:'igazolvány száma', value:updatedSkill.tipusismeret_szama, name:'tipusismeret_szama'},
            {label:'érvényességi idő', value:updatedSkill.tipusismeret_ideje, name:'tipusismeret_ideje'},
            ];
        break;
        case 'drives':
            skill = [
            {label:'jogosítvány kategória', value:updatedSkill.jogositvany_kategoria, name:'jogositvany_kategoria'},
            ];
        break;
    }
  
    return (
      <Box>
      
        <Box sx={{display:'flex', flexWrap:'wrap', gap:'10px', padding:'20px'}}>
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
      </Box>
    )
  }