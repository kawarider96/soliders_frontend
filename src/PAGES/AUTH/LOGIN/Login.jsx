import PasswordInput from "../../../COMPONENTS/INPUTS/PasswordInput"
import { Stack, Box, Typography, Button, Paper, TextField} from "@mui/material"
import { useNavigate } from "react-router-dom"
import React, {useState} from "react"
import Videobg from "../../../COMPONENTS/VIDEO_BACKGROUND/Videobg"
import { useAxiosFunctions } from "../../../SUPPORT/SERVER/useAxiosFunctions"

export default function Login() {
    const {login} = useAxiosFunctions();
    let navigate = useNavigate();
    const [sztsz, setSztsz] = useState('');
    const [password, setPassword] = useState('');
   
    const getLogin = () => {
        login('login', sztsz, password);
        navigate('/');
    };

    return (
        <Box sx={{height:'100vh', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Videobg/>
            <Paper elevation={20} sx={{
                    padding:'30px', 
                    display:'grid', 
                    gap:'20px',
                    background: 'rgba(0,0,0,0.5) !important', 
                    backdropFilter: 'blur(10px)', 
                    border:'1px solid rgba(22,22,22,0.25)', 
                    boxShadow:'0.5px 0 12.5px 0 #000000',
                    textAlign:'center'}}>
                    <Typography variant="button" color="primary" sx={{fontWeight:'bold'}}>
                        bejelentkezés
                    </Typography>
                    <TextField label={'sztsz'} name={'sztsz'} value={sztsz}  onChange={(e) => setSztsz(e.target.value)}/>
                    <PasswordInput label={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button variant="contained" onClick={getLogin}>BEJELENTKEZÉS</Button>
                </Paper>
        </Box>
    )
}