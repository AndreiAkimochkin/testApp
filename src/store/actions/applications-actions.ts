import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import InfrastructureService from "../../service/infrastructureService";
import {ApplicationsType} from "../../models/redux-models";
import {RootState} from "../index";
import applicationsSlice from "../slice/applications-slise";

export const applicationsActions=applicationsSlice.actions

export const fetchApplications=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        try{
            if(getState().applications.all_app.length===0){
                const response:ApplicationsType[]= await InfrastructureService.applications();
                dispatch(applicationsActions.setApplications(response))
            }
        }catch(error) {
            return console.error(error);
        }
    }
}