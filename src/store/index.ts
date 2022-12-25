import {configureStore} from '@reduxjs/toolkit';
import applicationsSlice from "./slice/applications-slise";
import nodesSlice from "./slice/nodes-applications";
import interfacesSlice from "./slice/interfaces-slise";
import metricsSlice from './slice/metrics-slice';
import statusesSlice from "./slice/statuses-slice";




const store = configureStore(
    {
        reducer:
            {
                applications: applicationsSlice.reducer,
                nodes: nodesSlice.reducer,
                interfaces: interfacesSlice.reducer,
                metrics: metricsSlice.reducer,
                statuses: statusesSlice.reducer,
            },
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;