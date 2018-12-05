import getSavedState from 'utils/getSavedState'
const INITIAL_STATE = getSavedState('NYCTAXI', {})

export default function dashBoard (state=INITIAL_STATE, action) {
  switch (action.type) {  
    case 'GET_DASHBOARD_SUCCESS_Yellow':
    case 'GET_DASHBOARD_SUCCESS_Green':
    case 'UPDATE_SEARCH_ACTION':
    case 'GET_TAXIZONES_SUCCESS':
        return action.payload    
      
    default:
      return state
  }
}
