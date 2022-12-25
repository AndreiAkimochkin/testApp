import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InterfacesArrayType, InterfacesType} from "../../models/redux-models";

const initialInterfacesState: InterfacesArrayType = {
    all_int: [],
}

const interfacesSlice = createSlice({
    name: 'interfaces',
    initialState: initialInterfacesState,
    reducers: {
        setInterfaces(state, action: PayloadAction<InterfacesType[]>) {
            state.all_int = action.payload
        }
    }
})
export default interfacesSlice;