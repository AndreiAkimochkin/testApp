import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './Status.css';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import {fetchStatuses} from "../../store/actions/statuses-actions";


const Status = () => {
    const dispatch = useAppDispatch();
    const statuses = useAppSelector(state => state.statuses.all_statuses);


    useEffect(() => {
        dispatch(fetchStatuses())
    }, [dispatch])

    return (
        <div className='status_container'>
            <div className='status_title'><ChargingStationIcon/><b>Status</b></div>
                    <div className='status_nodes'>
                        {statuses?.map((status, index) => (
                            <ul key={`${status.id} + ${index}`} >
                                <><b>Color:</b> {status.color}, </>
                                <><b>Status:</b> {status.description}</>
                            </ul>
                        ))}
                    </div>
        </div>
    );
};

export default Status;