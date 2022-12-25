import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { MetricsArrayType, MetricsType} from "../../models/redux-models";

const initialMetricsState: MetricsArrayType = {
    all_metrics: [],
}

const metricsSlice = createSlice({
    name: 'metrics',
    initialState: initialMetricsState,
    reducers: {
        setMetrics(state, action: PayloadAction<MetricsType[]>) {
            state.all_metrics = action.payload
        }
    }
})
export default metricsSlice;