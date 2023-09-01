import {AssessmentsContext} from '../context/AssessmentContext'
import { useContext } from 'react'

export const useAssessmentsContext = () => {
    const context = useContext(AssessmentsContext)

    if (!context) {
        throw Error('useAssessmentContext must be used inside an AssessmentsContextProvider')
    }

    return context 
}