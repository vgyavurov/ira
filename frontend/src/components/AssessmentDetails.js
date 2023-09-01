import { useAssessmentsContext } from "../hooks/useAssessmentsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react"




//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Box, Stack, Typography } from "@mui/material"
import { lightBlue } from "@mui/material/colors"

const AssessmentDetails = ({ assessment }) => {
    const { dispatch } = useAssessmentsContext()
    const { user } = useAuthContext()
    const [isShown, setIsShown] = useState(false)
    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('http://localhost:3010/api/assessments/' + assessment._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {

            dispatch({ type: 'DELETE_ASSESSMENT', payload: json })

        }
    }
    const color = lightBlue[900]
    return (


        <div className="assessment-details">
            <h4>{assessment.title}</h4>
            <Stack direction="row" alignItems={"center"} spacing={1}>
                <p>Frequency of task: </p>
                <Typography variant='h6' color={color}>
                    {assessment.frequency_of_task_execution}
                </Typography>
            </Stack>

            <Stack direction="row" alignItems={"center"} spacing={1}>
                <p>Probability that information is used: </p>
                <Typography variant='h6' color={color}>
                    {assessment.probability_that_information_is_used}%
                </Typography>

            </Stack>

            <Stack direction="row" alignItems={"center"} spacing={1}>
                <p>Probability that information quality problem appears: </p>
                <Typography variant='h6' color={color}>
                    {assessment.probability_that_information_quality_problem_appears}%
                </Typography>
            </Stack>

<br></br>
<button className="data-button" onClick={()=> {setIsShown(!isShown)}}>{isShown ? 'Show Less' : 'Show More'}</button>
{isShown ?
  <Stack direction="row" spacing={12} sx={{pt:'10px'}}>
  <Box>
      <strong>Overall impact of each direct consequence</strong>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Probability that consequence appears: </p>
          <Typography variant='h6' color={color}>
              {assessment.probability_that_consequence_appears_A}%
          </Typography>
      </Stack>
      <h5>It takes longer to find solution</h5>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Customer satisfaction: </p>
          <Typography variant='h5' color={color}>
              {assessment.customer_satisfaction_a}%
          </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Operational efficiency: </p>
          <Typography variant='h6' color={color}>
              {assessment.operational_efficiency_a}$
          </Typography>
      </Stack>
 
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Probability that consequence appears: </p>
          <Typography variant='h6' color={color}>
              {assessment.probability_that_consequence_appears_b}%
          </Typography>
      </Stack>
      <h5>Response to customer is delayed</h5>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Customer satisfaction: </p>
          <Typography variant='h5' color={color}>
              {assessment.customer_satisfaction_b}%
          </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Operational efficiency: </p>
          <Typography variant='h6' color={color}>
              {assessment.operational_efficiency_b}$
          </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Probability that consequence appears: </p>
          <Typography variant='h6' color={color}>
              {assessment.probability_that_consequence_appears_c}%
          </Typography>
      </Stack>
      <h5>Wrong solution is given</h5>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Customer satisfaction: </p>
          <Typography variant='h6' color={color}>
              {assessment.customer_satisfaction_c}%
          </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Operational efficiency: </p>
          <Typography variant='h6' color={color}>
              {assessment.operational_efficiency_c}$
          </Typography>
      </Stack>
  </Box>

  <Box><strong>Overall impact that the solution cannot be found</strong>
  <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Probability that consequence appears: </p>
          <Typography variant='h6' color={color}>
              {assessment.probability_that_consequence_appears_B}%
          </Typography>
      </Stack>
      <h5>Solution cannot be found</h5>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Customer satisfaction: </p>
          <Typography variant='h6' color={color}>
              {assessment.customer_satisfaction_d}%
          </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Operational efficiency: </p>
          <Typography variant='h6' color={color}>
              {assessment.operational_efficiency_d}$
          </Typography>
      </Stack>
    
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Probability that consequence appears: </p>
          <Typography variant='h6' color={color}>
              {assessment.probability_that_consequence_appears_e}%
          </Typography>
      </Stack>
      <h5>Customer inquiry can not be resolved</h5>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Customer satisfaction: </p>
          <Typography variant='h6' color={color}>
              {assessment.customer_satisfaction_e}%
          </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={1}>
          <p>Operational efficiency: </p>
          <Typography variant='h6' color={color}>
              {assessment.operational_efficiency_e}$
          </Typography>
      </Stack>
  </Box>
</Stack>
: ''}
          
            <br></br>
           
            <p style={{paddingTop:'10px'}}>{formatDistanceToNow(new Date(assessment.createdAt), { addSuffix: true })}</p>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

        </div>
    )

}

export default AssessmentDetails