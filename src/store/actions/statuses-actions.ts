import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import InfrastructureService from "../../service/infrastructureService";
import {RootState} from "../index";
import {StatusesType} from "../../models/redux-models";
import statusesSlice from "../slice/statuses-slice";

export const statusesActions=statusesSlice.actions

export const fetchStatuses=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        try{
            if(getState().statuses.all_statuses.length===0){
                const response:StatusesType[]= await InfrastructureService.statuses();
                dispatch(statusesActions.setStatuses(response))
            }
        }catch(error) {
            return console.error(error);
        }
    }
}