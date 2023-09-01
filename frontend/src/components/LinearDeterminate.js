import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from "@mui/material/styles";



const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#1aac83',

    },
    secondary: {
      main: '#e7195a',
    }

  }
});

export default function LinearDeterminate(progress, lo, hi) {

  
 
//color={progress > 50 ? "secondary": "primary"}
console.log('PROGRESS',progress);

  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        
        <LinearProgress variant="determinate" value={progress.progress} color={progress.progress > 50 ? "secondary": "primary"}  sx={{ height: 10 }} />
          
    
      </Box>
      </ThemeProvider>
      <div className='linear-data'>
        <div>{progress.lo}</div>
        <div>{progress.hi}</div>
      </div>
    </>

  )
}