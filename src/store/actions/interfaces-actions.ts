import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import InfrastructureService from "../../service/infrastructureService";
import {RootState} from "../index";
import {InterfacesType} from "../../models/redux-models";
import interfacesSlice from "../slice/interfaces-slise";

export const interfacesActions=interfacesSlice.actions

export const fetchInterfaces=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        try{
            if(getState().interfaces.all_int.length===0){
                const response:InterfacesType[]= await InfrastructureService.interfaces();
                dispatch(interfacesActions.setInterfaces(response))
            }
        }catch(error) {
            return console.error(error);
        }
    }
}