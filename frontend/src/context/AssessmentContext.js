import { createContext, useReducer } from 'react'

export const AssessmentsContext = createContext()

export const assessmentsReducer = (state, action) => {
    switch (action.type){
        case 'SET_ASSESSMENTS':
            return {
                assessments: action.payload
            }
        case 'CREATE_ASSESSMENT':
            return {
                assessments: [action.payload, ...state.assessments]
            }
        case 'DELETE_ASSESSMENT':
            return {
                assessments: state.assessments.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
} 

export const AssessmentsContextProvider = ({children})  => {
    const [state, dispatch] = useReducer(assessmentsReducer, {
        assessments: null
    })


    return (
        <AssessmentsContext.Provider value={{...state, dispatch}}>
            {children}
        </AssessmentsContext .Provider>
    )

}