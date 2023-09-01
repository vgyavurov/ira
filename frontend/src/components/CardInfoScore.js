import React from 'react';
import Card from '@mui/material/Card';

import { CardHeader, Typography } from '@mui/material';

import CardContent from '@mui/material/CardContent';

import { useConfigurationsContext } from '../hooks/useConfigurationsContext';

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

const CardInfoScore = ({ title, assessment }) => {

    const { configuration } = useConfigurationsContext()

    let progress = 0


    const Progress = {
        verylow: 10,
        low: 30,
        medium: 50,
        high: 80,
        veryhigh: 100

    }


    if (configuration) {
        if (assessment.total_expected_risk_units >= configuration.cs_veryLow_low && assessment.total_expected_risk_units <= configuration.cs_veryLow_high) {
            progress = Progress.verylow
        } else if (assessment.total_expected_risk_units >= configuration.cs_low_low && assessment.total_expected_risk_units <= configuration.cs_low_high) {
            progress = Progress.low
        } else if (assessment.total_expected_risk_units >= configuration.cs_medium_low && assessment.total_expected_risk_units <= configuration.cs_medium_high) {
            progress = Progress.medium
        } else if (assessment.total_expected_risk_units >= configuration.cs_high_low && assessment.total_expected_risk_units <= configuration.cs_high_high) {
            progress = Progress.high
        } else if (assessment.total_expected_risk_units >= configuration.cs_veryHigh_low && assessment.total_expected_risk_units <= configuration.cs_veryHigh_high) {
            progress = Progress.veryhigh
        }
    }
    if (configuration) {
        if (assessment.total_expected_risk_money >= configuration.oe_veryLow_low && assessment.total_expected_risk_money <= configuration.oe_veryLow_high) {
            progress = Progress.verylow
        } else if (assessment.total_expected_risk_money >= configuration.oe_low_low && assessment.total_expected_risk_money <= configuration.oe_low_high) {
            progress = Progress.low
        } else if (assessment.total_expected_risk_money >= configuration.oe_medium_low && assessment.total_expected_risk_money <= configuration.oe_medium_high) {
            progress = Progress.medium
        } else if (assessment.total_expected_risk_money >= configuration.oe_high_low && assessment.total_expected_risk_money <= configuration.oe_high_high) {
            progress = Progress.high
        } else if (assessment.total_expected_risk_money >= configuration.oe_veryHigh_low && assessment.total_expected_risk_money <= configuration.oe_veryHigh_high) {
            progress = Progress.veryhigh
        }
    }

    let risk = ''
    let end = ''
    if (progress === 10) {
        risk = 'Very Low'
        end = 'are tolerable and does not require treatment.'
    } else if (progress === 30) {
        risk = 'Low'
        end = 'are tolerable and does not require treatment.'
    } else if (progress === 50) {
        risk = 'Medium'
        end = 'are tolerable and does not require treatment.'
    } else if (progress === 80) {
        risk = 'High'
        end = 'are not tolerable and require treatment.'
    }
    else if (progress === 100) {
        risk = 'Very High'
        end = 'are not tolerable and require treatment.'
    }


    return (
        <Card>
            <ThemeProvider theme={theme}>
                <CardHeader title={title} sx={{ '&:last-child': { pb: 6 } }} />
                <CardContent sx={{ '&:last-child': { pb: 2 } }}>

                    <Typography variant={'body1'} display="inline">
                        {`The expected yearly impact of the information quality
                   problem of finding the solution is difficult on cost
                   efficiency is around `}
                    </Typography>
                    <Typography variant="button">
                        <strong>{`${Math.round(assessment.total_expected_risk_money)} USD`}</strong>
                    </Typography>
                    <Typography variant="body1" display={'inline'}>
                        {` and `}
                    </Typography>
                    <Typography variant="button">
                        <strong>{`${Math.round(assessment.total_expected_risk_units)}`}</strong>
                    </Typography>
                    <Typography variant="body1" display={'inline'}>
                        {` callers who
                   are dissatisfied. This means that the information risk is
                   evaluated as `}
                    </Typography>
                    <Typography variant="button" color={progress > 50 ? "secondary" : "primary"} display={'inline'} >
                        <strong>{risk}</strong>
                    </Typography>
                    <Typography variant="body1" display={'inline'}>
                        {` regarding both business objectives
                   of operational efficiency and customer satisfaction and
                   therefore the information risks `}
                    </Typography>
                    <Typography variant="button" display={'inline'} color={progress > 50 ? "secondary" : "primary"}>
                        <strong>{end}</strong>
                    </Typography>
                </CardContent>
            </ThemeProvider>
        </Card>
    )


}

export default CardInfoScore;