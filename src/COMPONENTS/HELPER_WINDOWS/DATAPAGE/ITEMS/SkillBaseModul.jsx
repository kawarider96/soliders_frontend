import { Box } from "@mui/material";
import { Header } from "../HEADER/Header";
import { InputX } from "../../../../SUPPORT/STYLES/UniqueStyle";

export const SkillBaseModul = ({item, dialogName, dataModul, selectedSolider}) => {
    let skill = [];
  
    switch(dialogName) {
        case 'contact':
            skill = [
            {label:'típus', value:item.contact_type, name:'contact_type'},
            {label:'kapcsolat', value:item.contact, name:'contact'},
            ];
        break;
        case 'shootings':
            skill = [
            {label:'szervező', value:item.szervezo, name:'szervezo'},
            {label:'lövészet típusa', value:item.loveszet_tipus, name:'loveszet_tipus'},
            {label:'fegyver', value:item.fegyver_tipus, name:'fegyver_tipus'},
            {label:'eredmény', value:item.eredmeny, name:'eredmeny'},
            {label:'dátum', value:item.datum, name:'datum'},
            {label:'igazolás száma', value:item.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'missions':
            skill = [
            {label:'hely', value:item.misszio_helye, name:'misszio_helye'},
            {label:'misszió neve', value:item.misszio_neve, name:'misszio_neve'},
            {label:'beosztás', value:item.beosztas, name:'beosztás'},
            {label:'kezdete', value:item.kezdete, name:'kezdete'},
            {label:'misszió vége', value:item.vege, name:'vege'},
            {label:'igazolas száma', value:item.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'courses':
            skill = [
            {label:'szervező', value:item.szervezo, name:'szervezo'},
            {label:'tanfolyam neve', value:item.tanfolyam_neve, name:'tanfolyam_neve'},
            {label:'dátum', value:item.datum, name:'datum'},
            {label:'igazolás száma', value:item.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'qualifications':
            skill = [
            {label:'szervező', value:item.szervezo, name:'szervezo'},
            {label:'szakképesítés neve', value:item.kepesites_neve, name:'kepesites_neve'},
            {label:'dátum', value:item.datum, name:'datum'},
            {label:'igazolás száma', value:item.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'physicals':
            skill = [
            {label:'korcsoport', value:item.korcsoport, name:'korcsoport'},
            {label:'felsőtest gyak. tipusa', value:item.felsotest_tipus, name:'felsotest_tipus'},
            {label:'felsőtest gyak. darabszám', value:item.felsotest_mennyiseg, name:'felsotest_mennyiseg'},
            {label:'felsőtest gyak. pontszáma', value:item.felsotest_pont, name:'felsotest_pont'},
            {label:'felülés darabszám', value:item.torzs_mennyiseg, name:'torzs_mennyiseg'},
            {label:'felülés pontszáma', value:item.torzs_pont, name:'torzs_pont'},
            {label:'futás ideje', value:item.futas_ido, name:'futas_ido'},
            {label:'futás pontszáma', value:item.futas_pont, name:'futas_pont'},
            {label:'fizikai eredmény pontszáma', value:item.ossz_pont, name:'ossz_pont'},
            {label:'felmérőlap száma', value:item.igazolas_szama, name:'igazolas_szama'},
            ];
        break;
        case 'residences':
            skill = [
            {label:'lakhely típus', value:item.lakhely_tipus, name:'lakhely_tipus'},
            {label:'ország', value:item.orszag, name:'orszag'},
            {label:'megye', value:item.megye, name:'megye'},
            {label:'irányítószám', value:item.iranyitoszam, name:'iranyitoszam'},
            {label:'város', value:item.varos, name:'varos'},
            {label:'utcanév', value:item.utca_neve, name:'utca_neve'},
            {label:'közterület jellege', value:item.kozterulet_jellege, name:'kozterulet_jellege'},
            {label:'házszám', value:item.hazszam, name:'hazszam'},
            ];
        break;
        case 'vehicleCategories':
            skill = [
            {label:'típus ismeret, jármű:', value:item.tipusismeret, name:'tipusismeret'},
            {label:'igazolvány száma', value:item.tipusismeret_szama, name:'tipusismeret_szama'},
            {label:'érvényességi idő', value:item.tipusismeret_ideje, name:'tipusismeret_ideje'},
            ];
        break;
        case 'drives':
            skill = [
            {label:'jogosítvány kategória', value:item.jogositvany_kategoria, name:'jogositvany_kategoria'},
            ];
        break;
    }
  
    return (
      <Box>
        <Box sx={{display:'flex', flexWrap:'wrap', gap:'10px', padding:'20px'}}>
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
      </Box>
    )
  }