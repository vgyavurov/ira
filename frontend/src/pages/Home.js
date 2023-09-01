import { useAssessmentsContext } from "../hooks/useAssessmentsContext"

import { useEffect } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { Grid, Paper } from '@mui/material';
import { useMediaQuery, useTheme, Divider } from '@mui/material';


//components 
import AssessmentDetails from "../components/AssessmentDetails"
import AssessmentForm from "../components/AssessmentForm"
import CircularStatic from "../components/CircularStatic"
import CardScore from "../components/CardScore";
import CardCircle from "../components/CardCircle";
import FormTablet from "../components/FormTablet";
import LinearDeterminate from "../components/LinearDeterminate"
import CardScoreLinear from "../components/CardScoreLinear";
import CardInfoScore from "../components/CardInfoScore"
import { useConfigurationsContext } from "../hooks/useConfigurationsContext";




const Home = () => {
    const { assessments, dispatch } = useAssessmentsContext()
    const { configuration } = useConfigurationsContext()



    const { user } = useAuthContext()
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('lg'));


    useEffect(() => {
        const fetchAssessments = async () => {
            const response = await fetch('http://localhost:3010/api/assessments', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_ASSESSMENTS', payload: json })
            }
        }
        if (user) {
            fetchAssessments()
        }
        fetchAssessments()
    }, [dispatch, user])


    let test = {}


    if (assessments) {
        const maxDate = new Date(
            Math.max(
                ...assessments.map(element => {
                    return new Date(element.createdAt);
                }),
            ),
        )
        test = { ...assessments.filter((e) => (new Date(e.createdAt)).getTime() === maxDate.getTime()) }
    }

    let progress = 0
    let lo = ''
    let hi = ''


    const Progress = {
        verylow: 10,
        low: 30,
        medium: 50,
        high: 80,
        veryhigh: 100

    }
    if (JSON.stringify(test) !== '{}') {
        if (configuration) {
            if (test[0].total_expected_risk_money >= configuration.oe_veryLow_low && test[0].total_expected_risk_money <= configuration.oe_veryLow_high) {
                progress = Progress.verylow
                lo = 'verylow'
                hi = 'low'
            } else if (test[0].total_expected_risk_money >= configuration.oe_low_low && test[0].total_expected_risk_money <= configuration.oe_low_high) {
                progress = Progress.low
                lo = 'low'
                hi = 'medium'
            } else if (test[0].total_expected_risk_money >= configuration.oe_medium_low && test[0].total_expected_risk_money <= configuration.oe_medium_high) {
                progress = Progress.medium
                lo = 'medium'
                hi = 'high'
            } else if (test[0].total_expected_risk_money >= configuration.oe_high_low && test[0].total_expected_risk_money <= configuration.oe_high_high) {
                progress = Progress.high
                lo = 'high'
                hi = 'veryhigh'
            } else if (test[0].total_expected_risk_money >= configuration.oe_veryHigh_low && test[0].total_expected_risk_money <= configuration.oe_veryHigh_high) {
                progress = Progress.veryhigh
                lo = 'veryhigh'
                hi = 'unlimited'
            }
        }
    }



    return (

        <Grid container className="home" spacing={3}>
            <Grid item md={12} lg={9} className="assessments">

                {assessments && Object.keys(test).length > 0 &&

                    (<>
                        <AssessmentDetails assessment={test[0]} />

                        <Grid container spacing={2} >

                            <Grid container item lg={12} spacing={2}>
                                <Grid item sm={6} md={12} lg={4}><CardCircle title='Dissatisfied Callers' data={<CircularStatic assessment={test[0]} />} /></Grid>
                                <Grid item sm={6} md={12} lg={3}><CardScoreLinear title='Cost Efficiency' data={`$${test[0].total_expected_risk_money}`} dataone={<><Divider /><br></br><LinearDeterminate progress={progress} lo={lo} hi={hi} /></>} /></Grid>
                                <Grid item sm={12} md={12} lg={5}><Paper><CardInfoScore title='Conclusion' assessment={test[0]} /></Paper></Grid>
                            </Grid>
                            <Grid container item lg={12} spacing={2} >
                                <Grid item sm={12} md={12} lg={4}><CardScore title='Yearly Absolute Frequency' data={test[0].yearly_absolute_frequency} date={new Date(test[0].createdAt).toDateString()} /></Grid>
                                <Grid item sm={12} md={12} lg={4}><CardScore title='Each Direct Consequence' data={`$${test[0].overall_impact_direct_consequence_money}`} dataone={<><Divider />{test[0].overall_impact_direct_consequence_units}</>} date={new Date(test[0].createdAt).toDateString()} /></Grid>
                                <Grid item sm={12} md={12} lg={4}><CardScore title='Solution Cannot Be Found' data={`$${test[0].overall_impact_that_the_solution_cannot_found_money}`} dataone={<><Divider />{test[0].overall_impact_that_the_solution_cannot_found_units}</>} date={new Date(test[0].createdAt).toDateString()} /></Grid>
                            </Grid>

                        </Grid>
                    </>)

                }
            </Grid>

            <Grid item md={12} lg={3}>{isMediumScreen ? <AssessmentForm /> : <FormTablet />}
            </Grid>
        </Grid>
    )
}

export default Home 