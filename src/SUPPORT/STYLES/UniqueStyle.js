import * as React from 'react';
import { AppBar, Box, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { theme } from './AppTheme.js'

export const DarkGlassAppBar = styled(AppBar)(({ theme }) => ({
    background: 'rgba(0,0,0,0.5) !important', 
    backdropFilter: 'blur(10px)', 
    border:'1px solid rgba(22,22,22,0.25)', 
    boxShadow:'0.5px 0 12.5px 0 #000000', 
}));

export const DarkGlassBox = styled(Box)(({ theme }) => ({
    background: 'rgba(0,0,0,0.5) !important', 
    backdropFilter: 'blur(10px)', 
    border:'1px solid rgba(22,22,22,0.25)', 
    boxShadow:'0.5px 0 12.5px 0 #000000', 
}));

export const LightGlassBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default, 
    backdropFilter: 'blur(10px)', 
    border:'1px solid rgba(22,22,22,0.25)', 
    boxShadow:'0 0 9px -1.5px #000000', 
}));

export const InputX = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        color: theme.palette.text.secondary, // Input szöveg színe mindig
      },
      '& .MuiInputLabel-root': { // Label alapértelmezett színe
        color: theme.palette.text.secondary,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.text.secondary, // Keret színe
        },
        '&:hover fieldset': {
          borderColor: theme.palette.background.default,
          color: theme.palette.text.secondary, // Keret színe rámutatáskor
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.background.default,
          color: theme.palette.text.secondary, // Keret színe fókuszált állapotban
        },
        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary, // Keret színe `disabled` állapotban
          },
          '& .MuiInputBase-input': {
            color: theme.palette.text.secondary, // Itt biztosítjuk, hogy a szöveg színe ne változzon `disabled` állapotban
            WebkitTextFillColor: theme.palette.text.secondary, // Kényszerítjük a szöveg színét bizonyos böngészőkben
            '-webkit-text-fill-color': theme.palette.text.secondary, // Kényszerítjük a szöveg színét bizonyos böngészőkben
          },
        }
      },
      '& .MuiInputLabel-root.Mui-disabled': {
        color: theme.palette.text.secondary, // Címke színe `disabled` állapotban
      },
      '& .MuiOutlinedInput-root.Mui-disabled .MuiInputLabel-root': {
        color: theme.palette.text.secondary, // `disabled` állapotban a label színe
      }
    }));
  
  