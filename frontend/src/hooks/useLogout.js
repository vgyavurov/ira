import { useAuthContext } from "./useAuthContext"
import { useAssessmentsContext } from "./useAssessmentsContext"



export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: assessmentsDispatch } = useAssessmentsContext()

    const logout = () => {
        //remove user from storage 
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
        assessmentsDispatch({type: 'SET_ASSESSMENTS', payload: null})
        
    }

    return { logout }
}