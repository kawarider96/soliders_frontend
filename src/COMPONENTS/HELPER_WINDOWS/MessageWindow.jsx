import { Box, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DarkGlassBox } from "../../SUPPORT/STYLES/UniqueStyle";


export function MessageWindow() {
    const [checked, setChecked] = useState(false);
    const message = useSelector(state => state.message.message);

    useEffect(() => {
        if (message.content) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    },[message.content]);

    return (
    <Slide in={checked} direction="right">
        <DarkGlassBox sx={{position:'fixed', bottom:'100px', left:'100px', zIndex:999, padding:'20px'}}>
            <Typography variant="button" color='orange'>{message.content}</Typography>
        </DarkGlassBox>
    </Slide>
    )
}