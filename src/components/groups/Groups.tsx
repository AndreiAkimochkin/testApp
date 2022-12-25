import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './Groups.css';
import GroupsIcon from '@mui/icons-material/Groups';
import {fetchStatuses} from "../../store/actions/statuses-actions";


const Groups = () => {
    const dispatch = useAppDispatch();
    const groups = useAppSelector(state => state.statuses.all_statuses);


    useEffect(() => {
        dispatch(fetchStatuses())
    }, [dispatch])

    return (
        <div className='groups_container'>
            <div className='groups_title'><GroupsIcon/><b>Groups</b></div>
                    <div className='groups_nodes'>
                        {groups?.map((group, index) => (
                            <ul key={`${group.id} + ${index}`} >
                                <>{group.description}</>
                            </ul>
                        ))}
                    </div>
        </div>
    );
};

export default Groups;