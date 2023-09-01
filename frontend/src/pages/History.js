import { useAssessmentsContext } from "../hooks/useAssessmentsContext"
//import { useConfigurationsContext } from "../hooks/useConfigurationsContext";
import { useEffect, useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { Grid, Paper, Divider } from '@mui/material';


//components 
import AssessmentDetailsHistory from "../components/AssessmentDetailsHistory"
import CircularStatic from "../components/CircularStatic"
import CardScore from "../components/CardScore";
import CardCircle from "../components/CardCircle";
import CardInfoScore from "../components/CardInfoScore"



const History = () => {
    const { assessments, dispatch } = useAssessmentsContext()
   // const { configuration } = useConfigurationsContext()
    const {user} = useAuthContext()
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        const fetchAssessments = async () => {
            const response = await fetch('http://localhost:3010/api/assessments', {
                headers: {
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

    return (
        
        <Grid container item className="home" spacing={3} sx={12} style={{display: "block"}}>
            <Grid item className="assessments" spacing={2} sx={12} >
                {assessments && assessments.map((assessment) => (
                    <>         
                     <AssessmentDetailsHistory key={assessment._id} assessment={assessment} />

                   <Grid container spacing={2} >              
                        <Grid container item lg={12} spacing={2}>
                        <Grid item sm={12} md={12} lg={3}><div style={{position:'relative'}}> <button className="data-button" onClick={()=> {setIsShown(!isShown)}}>{isShown ? 'Hide Results' : 'Show Results'}</button></div></Grid>                                
                        </Grid>                       
                    </Grid>
                     {isShown ? 
                     <Grid container spacing={2} >              
                        <Grid container item lg={12} spacing={2}>
                        <Grid item sm={12} md={12} lg={3}><CardCircle title = 'Dissatisfied Callers' data = {<CircularStatic assessment={assessment}/>} /></Grid>
                        <Grid item sm={12} md={12} lg={4}><Paper><CardInfoScore title='Conclusion' assessment={assessment}/></Paper></Grid>
                        </Grid>
                        <Grid container item sm={12} md={12} lg={12} spacing={2} >           
                            <Grid item sm={12} md={12} lg={4} spacing={2}><CardScore title= 'Yearly Absolute Frequency' data={assessment.yearly_absolute_frequency} date={new Date(assessment.createdAt).toDateString()} /></Grid>
                            <Grid item sm={12} md={12} lg={4} spacing={2}><CardScore title= 'Each Direct Consequence' data={`$${assessment.overall_impact_direct_consequence_money}`} dataone={<><Divider/>{assessment.overall_impact_direct_consequence_units}</>} date={new Date(assessment.createdAt).toDateString()}/></Grid>
                            <Grid item sm={12} md={12} lg={4} spacing={2}><CardScore title= 'Solution Cannot Be Found' data={`$${assessment.overall_impact_that_the_solution_cannot_found_money}`} dataone={<><Divider/>{assessment.overall_impact_that_the_solution_cannot_found_units}</>} date={new Date(assessment.createdAt).toDateString()} /></Grid>
                        </Grid>                 
                    </Grid>
                    :''}
                    </>          
                ))}
            </Grid>     
        </Grid>
    )
}

export default History