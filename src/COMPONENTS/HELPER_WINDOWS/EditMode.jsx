import { Paper, Slide, Button, Typography, ListItemButton } from "@mui/material";
import { useSelector } from "react-redux";
import { theme } from "../../SUPPORT/STYLES/AppTheme";
import WarningIcon from '@mui/icons-material/Warning';

export function EditMode() {
    const dataMode = useSelector(state => state.booleans.dataMode);
    return (
        <Slide in={dataMode}>
            <ListItemButton sx={{position:'fixed',  top:'10px', right:'10px', padding:'20px', }}>
                <Paper sx={{color:'orange', display:'flex', alignContent:'center', padding:'20px'}}>
                    <WarningIcon/> Szerkesztő mód aktív
                </Paper>
            </ListItemButton>
        </Slide>
    )
}