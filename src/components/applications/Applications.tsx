import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {fetchApplications} from "../../store/actions/applications-actions";
import './Applications.css';
import AppsIcon from '@mui/icons-material/Apps';

const Applications = () => {
    const dispatch = useAppDispatch();
    const app = useAppSelector(state => state.applications.all_app);


    useEffect(() => {
        dispatch(fetchApplications())
    }, [dispatch])
    return (
        <div className='app_container'>
            <div className='app_title'><AppsIcon/><b>Applications</b></div>
            <div className='app_nodes'>
                {app?.map((app, index) => (
                    <ul key={`${app.id} + ${index}`} >
                        <>{app.caption}</>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Applications;