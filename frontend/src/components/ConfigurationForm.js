import { useState } from "react"
import { useConfigurationsContext } from "../hooks/useConfigurationsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { Stack } from "@mui/material"

const ConfigurationForm = () => {

    const [oe_veryLow_low, setOe_VeryLow_Low] = useState('')
    const [oe_veryLow_high, setOe_VeryLow_High] = useState('')

    const [oe_low_low, setOe_Low_Low] = useState('')
    const [oe_low_high, setOe_Low_High] = useState('')

    const [oe_medium_low, setOe_Medium_Low] = useState('');
    const [oe_medium_high, setOe_Medium_High] = useState('')

    const [oe_high_low, setOe_High_Low] = useState('')
    const [oe_high_high, setOe_High_High] = useState('');

    const [oe_veryHigh_low, setOe_VeryHigh_Low] = useState('');
    const [oe_veryHigh_high, setOe_VeryHigh_High] = useState('');

    const [cs_veryLow_low, setCs_VeryLow_Low] = useState('');
    const [cs_veryLow_high, setCs_VeryLow_High] = useState('');
    const [cs_low_low, setCs_Low_Low] = useState('');
    const [cs_low_high, setCs_Low_High] = useState('');
    const [cs_medium_low, setCs_Medium_Low] = useState('');
    const [cs_medium_high, setCs_Medium_High] = useState('');
    const [cs_high_low, setCs_High_Low] = useState('');
    const [cs_high_high, setCs_High_High] = useState('');
    const [cs_veryHigh_low, setCs_VeryHigh_Low] = useState('');
    const [cs_veryHigh_high, setCs_VeryHigh_High] = useState('');


    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const { user } = useAuthContext()


    const { dispatch } = useConfigurationsContext()



    const handleSubmit = async (e) => {
        e.preventDefault()

        const configuration = {
            oe_veryLow_low,
            oe_veryLow_high,
            oe_low_low,
            oe_low_high,
            oe_medium_low,
            oe_medium_high,
            oe_high_low,
            oe_high_high,
            oe_veryHigh_low,
            oe_veryHigh_high,
            cs_veryLow_low,
            cs_veryLow_high,
            cs_low_low,
            cs_low_high,
            cs_medium_low,
            cs_medium_high,
            cs_high_low,
            cs_high_high,
            cs_veryHigh_low,
            cs_veryHigh_high

        }

        if (!user) {
            return
        }

        const response = await fetch('http://localhost:3010/api/configuration/645e369e6571a3e71d135f62', {
            method: 'PATCH',
            body: JSON.stringify(configuration),
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
            setOe_VeryLow_Low('')
            setOe_VeryLow_High('')
        
            setOe_Low_Low('')
            setOe_Low_High('')
        
            setOe_Medium_Low('')
            setOe_Medium_High('')
        
            setOe_High_Low('')
            setOe_High_High('')
        
            setOe_VeryHigh_Low('')
            setOe_VeryHigh_High('')
        
            setCs_VeryLow_Low('')
            setCs_VeryLow_High('')
            setCs_Low_Low('')
            setCs_Low_High('')
            setCs_Medium_Low('')
            setCs_Medium_High('')
            setCs_High_Low('')
            setCs_High_High('')
            setCs_VeryHigh_Low('')
            setCs_VeryHigh_High('')
        

            setError(null)
            setEmptyFields([])
            dispatch({ type: 'UPDATE_CONFIGURATION', payload: json })
            console.log('new configuration update is created', json)
        }
    }

    return (
     
            <form className="create" onSubmit={handleSubmit}>
                {/* <h3>Update Configuration</h3> */}
                <br></br>
                <h5>Risk criteria for the business objective
of operational efficiency</h5>

                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_VeryLow_Low(e.target.value) }}

                        value={oe_veryLow_low} 
                        className={emptyFields.includes('oe_veryLow_low') ? 'error' : ''}
                        />
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_VeryLow_High(e.target.value) }}
                        value={oe_veryLow_high} 
                        className={emptyFields.includes('oe_veryLow_high') ? 'error' : ''}/>
                </Stack>
              
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_Low_Low(e.target.value) }}

                        value={oe_low_low} 
                        className={emptyFields.includes('oe_low_low') ? 'error' : ''}/>
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_Low_High(e.target.value) }}
                        value={oe_low_high}
                        className={emptyFields.includes('oe_low_high') ? 'error' : ''}/>
                </Stack>
               
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_Medium_Low(e.target.value) }}

                        value={oe_medium_low}
                        className={emptyFields.includes('oe_medium_low') ? 'error' : ''} />
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_Medium_High(e.target.value) }}
                        value={oe_medium_high}
                        className={emptyFields.includes('oe_medium_high') ? 'error' : ''} />
                </Stack>
               
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_High_Low(e.target.value) }}

                        value={oe_high_low}
                        className={emptyFields.includes('oe_high_low') ? 'error' : ''}  />
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_High_High(e.target.value) }}
                        value={oe_high_high}
                        className={emptyFields.includes('oe_high_high') ? 'error' : ''}  />
                </Stack>
              
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_VeryHigh_Low(e.target.value) }}

                        value={oe_veryHigh_low} 
                        className={emptyFields.includes('oe_veryHigh_low') ? 'error' : ''}/>
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setOe_VeryHigh_High(e.target.value) }}
                        value={oe_veryHigh_high} 
                        className={emptyFields.includes('oe_veryHigh_high') ? 'error' : ''}/>
                </Stack>
                <br></br>
                <br></br>
                <h5>Risk criteria for the business objective
of customer satisfaction</h5>
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_VeryLow_Low(e.target.value) }}

                        value={cs_veryLow_low}
                        className={emptyFields.includes('cs_veryLow_low') ? 'error' : ''} />
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_VeryLow_High(e.target.value) }}
                        value={cs_veryLow_high} 
                        className={emptyFields.includes('cs_veryLow_high') ? 'error' : ''}/>
                </Stack>
              
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_Low_Low(e.target.value) }}

                        value={cs_low_low} 
                        className={emptyFields.includes('cs_low_low') ? 'error' : ''}/>
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_Low_High(e.target.value) }}
                        value={cs_low_high} 
                        className={emptyFields.includes('cs_low_high') ? 'error' : ''}/>
                </Stack>
              
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_Medium_Low(e.target.value) }}

                        value={cs_medium_low} 
                        className={emptyFields.includes('cs_medium_low') ? 'error' : ''}/>
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_Medium_High(e.target.value) }}
                        value={cs_medium_high} 
                        className={emptyFields.includes('cs_medium_high') ? 'error' : ''}/>
                </Stack>
                
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_High_Low(e.target.value) }}

                        value={cs_high_low}
                        className={emptyFields.includes('cs_high_low') ? 'error' : ''} />
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_High_High(e.target.value) }}
                        value={cs_high_high} 
                        className={emptyFields.includes('cs_high_high') ? 'error' : ''}/>
                </Stack>
                
                <Stack direction={"row"} alignItems={"center"}>
                    <label>L:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_VeryHigh_Low(e.target.value) }}

                        value={cs_veryHigh_low} 
                        className={emptyFields.includes('cs_veryHigh_low') ? 'error' : ''}/>
                    <label>H:</label>
                    <input
                        type="number"
                        onChange={(e) => { setCs_VeryHigh_High(e.target.value) }}
                        value={cs_veryHigh_high} 
                        className={emptyFields.includes('cs_veryHigh_high') ? 'error' : ''}/>
                </Stack>
                <br></br>
                {error && <div className="error">{error}</div>}
                <button>Update Configuration</button>
                
            </form>
   
           
        
        

        
    )
}

export default ConfigurationForm