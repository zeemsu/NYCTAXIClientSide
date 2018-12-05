import {GET_DASHBOARD_SUCCESS_Yellow,GET_DASHBOARD_SUCCESS_Green,GET_TAXIZONES_SUCCESS} from 'common/constants/ActionConstants'
import createAction from 'utils/createAction'
import Service from 'DashBoard/DashBoardService'
const getSuccessAction_Yellow = createAction(GET_DASHBOARD_SUCCESS_Yellow)
const getSuccessAction_Green = createAction(GET_DASHBOARD_SUCCESS_Green)
const getTaxiZoneSuccess = createAction(GET_TAXIZONES_SUCCESS)
import { get } from 'lodash'
import { browserHistory } from 'react-router'
const SCREEN_LOADER = '@SCREEN_LOADER@'

export const getDashBoardData = (search) => {
  return async (dispatch,getState) => {
    dispatch({
      type: SCREEN_LOADER,
      payload: { show: true,message:'Getting DashBoard Trip Data' }
    })
    try {    
      
      //if no search criteria is passed try to get it form the store first
      if(!search)
      search=[get(getState(), 'NYCTAXI.search')][0]  
      let results = await Service.getDashBoardData(search,'Y',dispatch);       
      dispatch(getSuccessAction_Yellow(results))
      results = await Service.getDashBoardData(search,'G',dispatch);       
      dispatch(getSuccessAction_Green(results))
    
    } catch (e) {
      browserHistory.push('/error/')      
    } finally {
      dispatch({
        type: SCREEN_LOADER,
        payload: { show: false }
      })
    }
  }
}
export const getTaxiZones = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: SCREEN_LOADER,
      payload: { show: true,message:'Getting Taxi Zones' }
    })
    try {    
      
      let results = await Service.getTaxiZones();       
      dispatch(getTaxiZoneSuccess(results))
    
    } catch (e) {
      browserHistory.push('/error/')      
    } finally {
      dispatch({
        type: SCREEN_LOADER,
        payload: { show: false }
      })
    }
  }
}




