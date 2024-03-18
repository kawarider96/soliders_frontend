import { Button, Grow, Paper, Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setStyle } from "../../SUPPORT/redux/actions/styleActions";

export function StyleChanger() {
    const styleMode = useSelector(state => state.booleans.styleMode);
    const dispatch = useDispatch();
    return (
        <Grow in={styleMode}>
            <Paper elevation={15} sx={{
            position:'absolute',
            left:'50%',
            top:'50%',
            transform:'translate(-50%, -50%)',
            zIndex:999
            }}>
                <Box sx={{display:'grid', gap:'10px', padding:'20px'}}>
                    <Button variant="contained" onClick={() => dispatch(setStyle(1))}>Style 1</Button>
                    <Button variant="contained" onClick={() => dispatch(setStyle(2))}>Style 2</Button>
                    <Button variant="contained" onClick={() => dispatch(setStyle(3))}>Style 3</Button>
                </Box>
            </Paper>
        </Grow>
    )
}