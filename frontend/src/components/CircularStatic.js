import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Box, Card } from '@mui/material';
import { useEffect } from 'react';
import { useConfigurationsContext } from "../hooks/useConfigurationsContext"

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


function CircularProgressWithLabel(props) {

  return (
    <Card sx={{ position: 'relative', display: 'inline-flex', paddingTop: '0px', paddingBottom: '0px', boxShadow: 'none' }}>
      <ThemeProvider theme={theme}>
        <CircularProgress variant="determinate" {...props} size={200} color={props.color} />
      </ThemeProvider>

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" fontWeight={700} fontSize={40} sx={{ paddingLeft: '10px' }}>
          {`${props.assessment.assessment.total_expected_risk_units}`}
        </Typography>
      </Box>
    </Card>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(assessment) {
  const { configuration, dispatch } = useConfigurationsContext()




  useEffect(() => {
    const fetchConfigurations = async () => {
      const response = await fetch('http://localhost:3010/api/configuration/64690f93381ed65ce38aba7a', {
        headers: {
          'Content-Type': 'application/json'
       
        }
      })

      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_CONFIGURATIONS', payload: json })
      }
    }
  
    fetchConfigurations()
  }, [dispatch])





  let progress = 0


  const Progress = {
    verylow: 10,
    low: 30,
    medium: 50,
    high: 80,
    veryhigh: 100

  }

  if (configuration) {
    if (assessment.assessment.total_expected_risk_units >= configuration.cs_veryLow_low && assessment.assessment.total_expected_risk_units <= configuration.cs_veryLow_high) {
      progress = Progress.verylow
    } else if (assessment.assessment.total_expected_risk_units >= configuration.cs_low_low && assessment.assessment.total_expected_risk_units <= configuration.cs_low_high) {
      progress = Progress.low
    } else if (assessment.assessment.total_expected_risk_units >= configuration.cs_medium_low && assessment.assessment.total_expected_risk_units <= configuration.cs_medium_high) {
      progress = Progress.medium
    } else if (assessment.assessment.total_expected_risk_units >= configuration.cs_high_low && assessment.assessment.total_expected_risk_units <= configuration.cs_high_high) {
      progress = Progress.high
    } else if (assessment.assessment.total_expected_risk_units >= configuration.cs_veryHigh_low && assessment.assessment.total_expected_risk_units <= configuration.cs_veryHigh_high) {
      progress = Progress.veryhigh
    }
  }


  return <>
    <ThemeProvider theme={theme}>
      <CircularProgressWithLabel value={progress} assessment={assessment} color={progress > 50 ? "secondary" : "primary"} />
    </ThemeProvider>
  </>

}
