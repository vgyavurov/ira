import { createContext, useReducer } from 'react'

export const ConfigurationsContext = createContext()

export const configurationsReducer = (state, action) => {
    switch (action.type){
        case 'SET_CONFIGURATIONS':
            return {
                configuration: action.payload
            }   
        case 'UPDATE_CONFIGURATION':
            return {
                configuration: [action.payload]
            }
       
        default:
            return state
    }
} 

export const ConfigurationsContextProvider = ({children})  => {
    const [state, dispatch] = useReducer(configurationsReducer, {
        configuration: null
    })


    return (
        <ConfigurationsContext.Provider value={{...state, dispatch}}>
            {children}
        </ConfigurationsContext.Provider>
    )

}