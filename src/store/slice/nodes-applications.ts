import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { NodesArrayType, NodesType} from "../../models/redux-models";

const initialNodesState: NodesArrayType = {
    all_nodes: [],
}

const nodesSlice = createSlice({
    name: 'nodes',
    initialState: initialNodesState,
    reducers: {
        setNodes(state, action: PayloadAction<NodesType[]>) {
            state.all_nodes = action.payload
        }
    }
})
export default nodesSlice;