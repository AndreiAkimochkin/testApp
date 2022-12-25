import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApplicationsArrayType, ApplicationsType} from "../../models/redux-models";

const initialApplicationsState: ApplicationsArrayType = {
    all_app: [],
}

const applicationsSlice = createSlice({
    name: 'applications',
    initialState: initialApplicationsState,
    reducers: {
        setApplications(state, action: PayloadAction<ApplicationsType[]>) {
            state.all_app = action.payload
        }
    }
})
export default applicationsSlice;