import React from 'react';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#283618',
      },
      secondary: {
        main: '#606C38',
      },
      error: {
        main: '#8C1F28',
      },
      success: {
        main: '#aacc00',
      },
      background: {
        default: '#FEFAE0',
        paper: 'rgba(0,0,0,0.9)',
      },
      text: {
        primary: '#283618',
        secondary: '#a4ac86',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '2.5rem',
      },
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8, // Az alapértelmezett térköz 8px (ezt szorzóként lehet használni)
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4, // Gombok specifikus kerekítése
          },
        },
      },
      // További komponensek testreszabása itt
    },
  });

  export const theme2 = createTheme({
    palette: {
      primary: {
        main: '#7C162E',
      },
      secondary: {
        main: '#606C38',
      },
      error: {
        main: '#8C1F28',
      },
      success: {
        main: '#aacc00',
      },
      background: {
        default: '#191528',
        paper: 'rgba(0,0,0,0.5)',
      },
      text: {
        primary: '#ffff',
        secondary: '#3C162F',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '2.5rem',
      },
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8, // Az alapértelmezett térköz 8px (ezt szorzóként lehet használni)
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4, // Gombok specifikus kerekítése
          },
        },
      },
      // További komponensek testreszabása itt
    },
  });

  export const theme3 = createTheme({
    palette: {
      primary: {
        main: '#40916c',
      },
      secondary: {
        main: '#606C38',
      },
      error: {
        main: '#8C1F28',
      },
      success: {
        main: '#aacc00',
      },
      background: {
        default: '#212529',
        paper: '#081c15',
      },
      text: {
        primary: '#ffff',
        secondary: '#3C162F',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '2.5rem',
      },
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8, // Az alapértelmezett térköz 8px (ezt szorzóként lehet használni)
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4, // Gombok specifikus kerekítése
          },
        },
      },
      // További komponensek testreszabása itt
    },
  });