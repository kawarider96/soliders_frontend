import { Paper, AppBar, Toolbar, Avatar, Typography, Button, Box, Slide } from "@mui/material";
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarMode } from "../../SUPPORT/redux/actions/booleansActions";
import { useAxiosFunctions } from "../../SUPPORT/SERVER/useAxiosFunctions";
import { useNavigate } from "react-router-dom";
import { DarkGlassAppBar } from "../../SUPPORT/STYLES/UniqueStyle";

export function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navbarMode = useSelector(state => state.booleans.navbarMode);
    const {logout, getExport} = useAxiosFunctions();

    let sztsz = localStorage.getItem('id');
    let role = localStorage.getItem('role');
    let name = localStorage.getItem('name');

    const LogOut = () => {
        logout('logout');
    };

    return (
    <Slide in={navbarMode} direction="right">
    <DarkGlassAppBar 
    position="fixed" 
    sx={{
    height:'100%', 
    maxWidth:'300px', 
    left:'0px', 
    padding:'30px', 
    zIndex:900
    }}>
        <Toolbar disableGutters sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <Paper elevation={10} sx={{padding:'10px', display:'flex',gap:'10px', alignItems:'center'}}>
              <Avatar alt="logo" sx={{height:'60px', width:'60px'}}/>
              <Box sx={{display:'grid', color:'white'}}>
                <Typography variant='button'>{name}</Typography>
                <Typography variant='caption' sx={{color:'grey'}}>{role}</Typography>
              </Box>
            </Paper>

            <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <Button variant='contained' onClick={() => navigate('/')} >Főoldal</Button>
              <Button variant='contained' onClick={() => navigate('/soliders')}>Katonák</Button>
              <Button variant='contained' onClick={() => getExport('/export')}>adattábla export</Button>
              <Button variant='contained' onClick={LogOut} >Kijelentkezés</Button>
            </Box>
        </Toolbar>
    </DarkGlassAppBar>
    </Slide>
    )
}