import {ConfigurationsContext} from '../context/ConfigurationContext'
import { useContext } from 'react'

export const useConfigurationsContext = () => {
    const context = useContext(ConfigurationsContext)

    if (!context) {
        throw Error('useConfigurationsContext must be used inside an ConfigurationsContextProvider')
    }

    return context 
}