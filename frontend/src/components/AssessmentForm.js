import { useAssessmentsContext } from "../hooks/useAssessmentsContext"
import { useState, useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";




const stepStyle = {
  boxShadow: 2,
  // backgroundColor: "rgba(0,0,0,0.1)",
  padding: 2,
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#1aac83",
      fontSize: "2rem"
    }
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "#1aac83",
      fontSize: "2rem"
    }
  }

}
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#1aac83',
      contrastText: '#fff',
    },

  }
});
const AssessmentForm = () => {
  const { dispatch } = useAssessmentsContext()
  


  const [title, setTitle] = useState('')
  const [frequency_of_task_execution, setFrequency] = useState('')
  const [probability_that_information_is_used, setInformationIsUsed] = useState('')
  const [probability_that_information_quality_problem_appears, setInformationQualityProblem] = useState('')

  const [customer_satisfaction_a, setCustomerSatisfactiona] = useState('')
  const [operational_efficiency_a, setOperationalEfficiencya] = useState('')
  
  const [probability_that_consequence_appears_b, setProbabilityConsequenceb] = useState('')
  const [customer_satisfaction_b, setCustomerSatisfactionb] = useState('')
  const [operational_efficiency_b, setOperationalEfficiencyb] = useState('');

  const [probability_that_consequence_appears_c, setProbabilityConsequencec] = useState('')
  const [customer_satisfaction_c, setCustomerSatisfactionc] = useState('')
  const [operational_efficiency_c, setOperationalEfficiencyc] = useState('');

  const [customer_satisfaction_d, setCustomerSatisfactiond] = useState('');
  const [operational_efficiency_d, setOperationalEfficiencyd] = useState('');

  const [probability_that_consequence_appears_e, setProbabilityConsequencee] = useState('');
  const [customer_satisfaction_e, setCustomerSatisfactione] = useState('');
  const [operational_efficiency_e, setOperationalEfficiencye] = useState('');

  const [probability_that_consequence_appears_A, setProbabilityConsequenceA] = useState('');
  const [probability_that_consequence_appears_B, setProbabilityConsequenceB] = useState('');

  const [yearly_absolute_frequency, setAbsoluteFrequency] = useState('');
  const [overall_impact_direct_consequence_money, setDirectConsequenceMoney] = useState('');
  const [overall_impact_direct_consequence_units, setDirectConsequenceUnits] = useState('');
  const [overall_impact_that_the_solution_cannot_found_money, setSolutionCannotFoundMoney] = useState('');
  const [overall_impact_that_the_solution_cannot_found_units, setSolutionCannotFoundUnits] = useState('');
  const [total_expected_risk_money, setTotalExpectedRiskMoney] = useState('');
  const [total_expected_risk_units, setTotalExpectedRiskUnits] = useState('');

  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const { user } = useAuthContext()

  const [activeStep, setActiveStep] = React.useState(0);
  


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  useEffect(() => {
    setAbsoluteFrequency((Number.parseInt(frequency_of_task_execution) * (parseFloat(probability_that_information_is_used) / Number.parseInt(100)) * (Number.parseFloat(probability_that_information_quality_problem_appears) / Number.parseInt(100))).toFixed(3))
    setDirectConsequenceMoney((parseFloat(operational_efficiency_a) + (parseFloat(probability_that_consequence_appears_b) / 100) * parseFloat(operational_efficiency_b) + (parseFloat(probability_that_consequence_appears_c) / 100) * parseFloat(operational_efficiency_c)).toFixed(3))  
    setDirectConsequenceUnits((parseFloat(customer_satisfaction_a) + (parseFloat(probability_that_consequence_appears_b) / 100) *  parseFloat(customer_satisfaction_b) + (parseFloat(probability_that_consequence_appears_c) / 100) * parseFloat(customer_satisfaction_c)).toFixed(3))
    setSolutionCannotFoundMoney((parseFloat(operational_efficiency_d) + (parseFloat(probability_that_consequence_appears_e) / 100) * parseFloat(operational_efficiency_e)).toFixed(3))
    setSolutionCannotFoundUnits((parseFloat(customer_satisfaction_d) + (parseFloat(probability_that_consequence_appears_e) / 100) * parseFloat(customer_satisfaction_e)).toFixed(3))
    setTotalExpectedRiskMoney((parseFloat(yearly_absolute_frequency) * ((parseFloat(probability_that_consequence_appears_A) /100) * parseFloat(overall_impact_direct_consequence_money) + (parseFloat(probability_that_consequence_appears_B) /100) * parseFloat(overall_impact_that_the_solution_cannot_found_money) )).toFixed(3))
    setTotalExpectedRiskUnits((parseFloat(yearly_absolute_frequency) * ((parseFloat(probability_that_consequence_appears_A) /100) * parseFloat(overall_impact_direct_consequence_units) + (parseFloat(probability_that_consequence_appears_B) /100) * parseFloat(overall_impact_that_the_solution_cannot_found_units) )).toFixed(3))
       
  }, [frequency_of_task_execution,
    probability_that_information_is_used,
    probability_that_information_quality_problem_appears,
    operational_efficiency_a, 
    operational_efficiency_b,
    operational_efficiency_c,
    operational_efficiency_d,
    operational_efficiency_e,
    probability_that_consequence_appears_b,
    probability_that_consequence_appears_c,
    probability_that_consequence_appears_e,
    customer_satisfaction_a,
    customer_satisfaction_b,
    customer_satisfaction_c,
    customer_satisfaction_d,
    customer_satisfaction_e,
    yearly_absolute_frequency,
    overall_impact_direct_consequence_money,
    overall_impact_direct_consequence_units,
    overall_impact_that_the_solution_cannot_found_money,
    overall_impact_that_the_solution_cannot_found_units,
    probability_that_consequence_appears_A,
    probability_that_consequence_appears_B])
 
  const handleSubmit = async (e) => {
    e.preventDefault()
 
    if (!user) {
      setError('You must be logged in')
      return
    }
    // Number.parseFloat(frequency_of_task_execution)
    // Number.parseFloat(probability_that_information_is_used)
    // Number.parseFloat(probability_that_information_quality_problem_appears)
    // Number.parseFloat(customer_satisfaction_a)
    // Number.parseFloat(operational_efficiency_a)
    // Number.parseFloat(probability_that_consequence_appears_b)
    // Number.parseFloat(customer_satisfaction_b)
    // Number.parseFloat(probability_that_consequence_appears_b)
   
    const assessment = {
        title,
        frequency_of_task_execution,
        probability_that_information_is_used,
        probability_that_information_quality_problem_appears,
        customer_satisfaction_a,
        operational_efficiency_a,
        probability_that_consequence_appears_b,
        customer_satisfaction_b,
        operational_efficiency_b,
        probability_that_consequence_appears_c,
        customer_satisfaction_c,
        operational_efficiency_c,
        customer_satisfaction_d,
        operational_efficiency_d,
        probability_that_consequence_appears_e,
        customer_satisfaction_e,
        operational_efficiency_e,
        probability_that_consequence_appears_A,
        probability_that_consequence_appears_B,
        yearly_absolute_frequency,
        overall_impact_direct_consequence_money,
        overall_impact_direct_consequence_units,
        overall_impact_that_the_solution_cannot_found_money,
        overall_impact_that_the_solution_cannot_found_units,
        total_expected_risk_money,
        total_expected_risk_units
      }
    
    const response = await fetch('http://localhost:3010/api/assessments', {
      method: 'POST',
      body: JSON.stringify(assessment),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
   
    const json = await response.json()
    

    
    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    
    if (response.ok) {
      setTitle('')
      setFrequency('')
      setInformationIsUsed('')
      setInformationQualityProblem('')
      setCustomerSatisfactiona('')
      setOperationalEfficiencya('')
      setProbabilityConsequenceb('')
      setCustomerSatisfactionb('')
      setOperationalEfficiencyb('')
      setProbabilityConsequencec('')
      setCustomerSatisfactionc('')
      setOperationalEfficiencyc('')
      setCustomerSatisfactiond('')
      setOperationalEfficiencyd('')
      setProbabilityConsequencee('')
      setCustomerSatisfactione('')
      setOperationalEfficiencye('')
      setProbabilityConsequenceA('')
      setProbabilityConsequenceB('')
      setAbsoluteFrequency('')
      setDirectConsequenceMoney('')
      setDirectConsequenceUnits('')
      setSolutionCannotFoundMoney('')
      setSolutionCannotFoundUnits('')
      setTotalExpectedRiskMoney('')
      setTotalExpectedRiskUnits('')
      setError(null)
      setEmptyFields([])
     
      dispatch({ type: 'CREATE_ASSESSMENT', payload: json })

      console.log('new assessment added', json)
    }

  }
  const steps = [
    {
      label: 'TIRM process applied at',
      description:
        <>
          <label>Business Process Title:</label>
          <input
            type="text"
            onChange={(e) => { setTitle(e.target.value) }}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
          />
        </>

    },
    {
      label: 'Select frequency of task execution',
      description:
        <>
          <input
            type="number"
            onChange={(e) => { setFrequency(e.target.value) }}
            value={frequency_of_task_execution}
            className={emptyFields.includes('frequency_of_task_execution') ? 'error' : ''}
          />
        </>

    },
    {
      label: 'Probability that information is used',
      description:
        <><label>Information is used (in percentage):</label>
          <input
            type="number"
            onChange={(e) => { setInformationIsUsed(e.target.value) }}
            value={probability_that_information_is_used}
            className={emptyFields.includes('probability_that_information_is_used') ? 'error' : ''}

          /></>
    },
    {
      label: 'Probability that information quality problem appears',
      description: <>  <label>Quality problem appear (in percentage):</label>
        <input
          type="number"
          onChange={(e) => { setInformationQualityProblem(e.target.value) }}
          value={probability_that_information_quality_problem_appears}
          className={emptyFields.includes('probability_that_information_quality_problem_appears') ? 'error' : ''}
        /></>
    },
    {
      label: 'Overall impact of each direct consequence',
      
      description: <> 
        <label>It takes longer to find solution</label>
        <br></br>
        <label>Operational efficiency</label>
        <input
          type="number"
          onChange={(e) => { setOperationalEfficiencya(e.target.value) }}
          value={operational_efficiency_a}
          className={emptyFields.includes('operational_efficiency_a') ? 'error' : ''}
        />
        <label>Customer satisfaction</label>
         <input
          type="number"
          onChange={(e) => { setCustomerSatisfactiona(e.target.value) }}
          value={customer_satisfaction_a}
          className={emptyFields.includes('customer_satisfaction_a') ? 'error' : ''}
        />
        <label>Response to customer is delayed</label>
        <br></br>
        <label>Probability that consequence appears (in percentage):</label>
        <input
          type="number"
          onChange={(e) => { setProbabilityConsequenceb(e.target.value) }}
          value={probability_that_consequence_appears_b}
          className={emptyFields.includes('probability_that_consequence_appears_b') ? 'error' : ''}
        />
        
        <label>Operational efficiency (in money):</label>
        <input
          type="number"
          onChange={(e) => { setOperationalEfficiencyb(e.target.value) }}
          value={operational_efficiency_b}
          className={emptyFields.includes('operational_efficiency_b') ? 'error' : ''}
        />
        <label>Customer satisfaction:</label>
        <input
          type="number"
          onChange={(e) => { setCustomerSatisfactionb(e.target.value) }}
          value={customer_satisfaction_b}
          className={emptyFields.includes('customer_satisfaction_b') ? 'error' : ''}
        />
         <label>Wrong solution is given</label>
        <br></br>
        <label>Probability that consequence appears (in percentage):</label>
        <input
          type="number"
          onChange={(e) => { setProbabilityConsequencec(e.target.value) }}
          value={probability_that_consequence_appears_c}
          className={emptyFields.includes('probability_that_consequence_appears_c') ? 'error' : ''}
        />
        
        <label>Operational efficiency (in money):</label>
        <input
          type="number"
          onChange={(e) => { setOperationalEfficiencyc(e.target.value) }}
          value={operational_efficiency_c}
          className={emptyFields.includes('operational_efficiency_c') ? 'error' : ''}
        />
        <label>Customer satisfaction:</label>
        <input
          type="number"
          onChange={(e) => { setCustomerSatisfactionc(e.target.value) }}
          value={customer_satisfaction_c}
          className={emptyFields.includes('customer_satisfaction_c') ? 'error' : ''}
        />
      </>
    },
    {
      label: 'Overall impact that the solution cannot be found',
      description: 
      <>  
      <label>Solution cannot be found</label>
        <br></br>
        <label>Operational efficiency (in money):</label>
        <input
          type="number"
          onChange={(e) => { setOperationalEfficiencyd(e.target.value) }}
          value={operational_efficiency_d}
          className={emptyFields.includes('operational_efficiency_d') ? 'error' : ''}
        />
        <label>Customer satisfaction:</label>
        <input
          type="number"
          onChange={(e) => { setCustomerSatisfactiond(e.target.value) 
           
            
           
          }}
          value={customer_satisfaction_d}
          className={emptyFields.includes('customer_satisfaction_d') ? 'error' : ''}
        />
        
        
        <label>Customer inquiry cannot be resolved</label>
        <br></br>
        <label>Probability that consequence appears (in percentage):</label>
        <input
          type="number"
          onChange={(e) => { setProbabilityConsequencee(e.target.value) }}
          value={probability_that_consequence_appears_e}
          className={emptyFields.includes('probability_that_consequence_appears_e') ? 'error' : ''}
        />
        <label>Operational efficiency (in money):</label>
        <input
          type="number"
          onChange={(e) => { setOperationalEfficiencye(e.target.value) }}
          value={operational_efficiency_e}
          className={emptyFields.includes('operational_efficiency_e') ? 'error' : ''}
        />
        <label>Customer satisfaction:</label>
        <input
          type="number"
          onChange={(e) => { setCustomerSatisfactione(e.target.value) 
           
            
           
          }}
          value={customer_satisfaction_e}
          className={emptyFields.includes('customer_satisfaction_e') ? 'error' : ''}
        />
      
      </>
    },
    {
      label: 'Probability that consequence appears',
      description: 
      <>  
     
        <label>Probability that consequence appears to It takes longer to find solution (in percentage):</label>
        <input
          type="number"
          onChange={(e) => { setProbabilityConsequenceA(e.target.value) }}
          value={probability_that_consequence_appears_A}
          className={emptyFields.includes('probability_that_consequence_appears_A') ? 'error' : ''}
        />
        <label>Probability that consequence appears to Solution cannot be found (in percentage):</label>
        <input
          type="number"
          onChange={(e) => { setProbabilityConsequenceB(e.target.value) 
          }}
          value={probability_that_consequence_appears_B}
          className={emptyFields.includes('probability_that_consequence_appears_B') ? 'error' : ''}
        />
        
        </>
        }


  ];

  return (
    <>

      <Box sx={{ maxWidth: 700 }}>
        <form className="create" onSubmit={handleSubmit}>
          <h3>Fill Steps To Assessing Information Risk</h3>
          <Stepper activeStep={activeStep} orientation="vertical" sx={stepStyle}>

            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 6 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>


                  <Typography>{step.description}</Typography>



                  {error && <div className="error">{error}</div>}



                  <Box sx={{ mb: 2 }}>
                    <div>
                      <ThemeProvider theme={theme}>
                        <Button
                          background-color="primary"
                          variant="contained"
                          onClick={index === steps.length - 1 ? handleSubmit : handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </ThemeProvider>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}

          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </form>
      </Box>
    </>
  )
}

export default AssessmentForm