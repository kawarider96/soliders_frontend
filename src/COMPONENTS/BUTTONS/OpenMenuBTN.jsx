import { useSelector, useDispatch } from "react-redux";
import { setNavbarMode } from "../../SUPPORT/redux/actions/booleansActions";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button } from "@mui/material";

export function OpenMenuBTN() {
    const dispatch = useDispatch();
    const navbarMode = useSelector(state => state.booleans.navbarMode);
  
    const open = () => {
        dispatch(setNavbarMode(!navbarMode));
    }
    return (
        <Box sx={{position:'fixed', zIndex:999, left:'10px', top:'10px'}}>
            <Button onClick={open}>
                {navbarMode ? 
                <ArrowCircleLeftIcon fontSize="large"/>
                :
                <ArrowCircleRightIcon fontSize="large"/>
                }
            </Button>
        </Box>
    )
}