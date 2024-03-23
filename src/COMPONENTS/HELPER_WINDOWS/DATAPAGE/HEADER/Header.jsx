import { Box, Typography } from "@mui/material";
import { theme } from "../../../../SUPPORT/STYLES/AppTheme";

export const Header = ({ dataModul, selectedSolider }) => {
    let title = '';
    console.log(dataModul)
    switch(dataModul) {
      case 1:
        title = 'Szervezeti adatok'
      break;
      case 2: 
        title = 'Munkahelyi adatok'
      break;
      case 3:
        title = 'Személyes adatok'
      break;
      case 4:
        title = 'Kapcsolat'
      break;
      case 5:
        title = 'Végzettség'
      break;
      case 6:
        title = 'Sofőr képességek'
      break;
      case 7:
        title = 'Lövészetek'
      break;
      case 8: 
        title = 'Missziók'
        break;
      case 9: 
        title = 'Tanfolyamok'
        break;
      case 10: 
        title = 'Szakképesítések'
        break;
      case 11: 
        title = 'Fizikai felmérések'
        break;
      case 12: 
        title = 'Lakcímek'
      break;
      case 13: 
        title = 'Gépjármű típusismeretek'
      break;
      case 14: 
        title = 'Jogosítvány kategóriák'
      break;
      case 15: 
        title = 'Új lövészeti eredmény'
      break;
      case 16: 
        title = 'Új misszió'
      break;
      case 17: 
        title = 'Új tanfolyam'
      break;
      case 18: 
        title = 'Új szakképesítés'
      break;
      case 19: 
        title = 'Új Kapcsolat'
      break;
      case 20: 
        title = 'Új lakcím'
      break;
      case 21: 
        title = 'Új jogosítvány kategória'
      break;
      case 22: 
        title = 'Új típusismeret'
      break;
      case 23: 
        title = 'Új fizikai felmérés'
      break;
    }
    return (
      <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Typography sx={{color: theme.palette.text.secondary, textTransform:'uppercase', fontSize:'160%'}}>{selectedSolider.personal.teljes_nev}</Typography>
        <Typography sx={{color: theme.palette.text.secondary, textTransform:'uppercase', fontSize:'160%'}}>{title}</Typography>
      </Box>
    )
  }