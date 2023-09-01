
import { Grid } from '@mui/material';

import ConfigurationForm from '../components/ConfigurationForm'
import ConfigurationDetails from '../components/ConfigurationDetails'

import { useConfigurationsContext } from "../hooks/useConfigurationsContext"

import { useEffect } from "react"

//components 



const Configuration = () => {
    const { configuration, dispatch } = useConfigurationsContext()

   // const { user } = useAuthContext()
   // const isMediumScreen = useMediaQuery(theme.breakpoints.up('lg'));
    useEffect(() => {
        const fetchConfigurations = async () => {
            const response = await fetch('http://localhost:3010/api/configuration/64690f93381ed65ce38aba7a', {
                headers: {
                    'Content-Type': 'application/json'
                  //  'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_CONFIGURATIONS', payload: json })
            }
        }
        // if (user) {
        //     fetchConfigurations()
        // }
        fetchConfigurations()
    }, [dispatch])


    return (
        <Grid container className="home" spacing={4}>
        <Grid item md={12} lg={8} className="assessments">

            {configuration &&
                        <ConfigurationDetails config={configuration} />

            }

        </Grid>
        <Grid item md={12} lg={4}>
            {configuration && 
            <ConfigurationForm config={configuration[0]} />
        }
        </Grid>      

</Grid>
   
    )
}

export default Configuration