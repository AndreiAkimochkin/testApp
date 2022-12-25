import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import InfrastructureService from "../../service/infrastructureService";
import {RootState} from "../index";
import {MetricsType} from "../../models/redux-models";
import metricsSlice from "../slice/metrics-slice";

export const metricsActions=metricsSlice.actions

export const fetchMetrics=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        try{
            if(getState().metrics.all_metrics.length===0){
                const response:MetricsType[]= await InfrastructureService.metrics();
                dispatch(metricsActions.setMetrics(response))
            }
        }catch(error) {
            return console.error(error);
        }
    }
}