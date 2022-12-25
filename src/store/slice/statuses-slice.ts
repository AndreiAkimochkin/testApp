import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { StatusesArrayType, StatusesType} from "../../models/redux-models";

const initialStatusesState: StatusesArrayType = {
    all_statuses: [],
}

const statusesSlice = createSlice({
    name: 'statuses',
    initialState: initialStatusesState,
    reducers: {
        setStatuses(state, action: PayloadAction<StatusesType[]>) {
            state.all_statuses = action.payload
        }
    }
})
export default statusesSlice;