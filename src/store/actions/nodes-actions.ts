import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import InfrastructureService from "../../service/infrastructureService";
import {RootState} from "../index";
import {NodesType} from "../../models/redux-models";
import nodesSlice from "../slice/nodes-applications";

export const nodesActions=nodesSlice.actions

export const fetchNodes=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        try{
            if(getState().nodes.all_nodes.length===0){
                const response:NodesType[]= await InfrastructureService.nodes();
                dispatch(nodesActions.setNodes(response))
            }
        }catch(error) {
            return console.error(error);
        }
    }
}