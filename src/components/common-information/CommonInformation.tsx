import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './CommonInformation.css';
import InfoIcon from '@mui/icons-material/Info';
import {fetchStatuses} from "../../store/actions/statuses-actions";


const CommonInformation = () => {
    const dispatch = useAppDispatch();
    const common = useAppSelector(state => state.statuses.all_statuses);

    const worstNode = Math.floor(Math.random() * common.length);


    useEffect(() => {
        dispatch(fetchStatuses())
    }, [dispatch])

    return (
        <div className='common_container'>
            <div className='common_title'><InfoIcon/><b>Common Information</b></div>
            <div className='common_nodes'>
                <p><b>Worst node is:</b> {worstNode}</p>
                <><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur
                    distinctio esse est fugiat illo itaque laboriosam maxime modi necessitatibus nesciunt non odio odit,
                    pariatur repellat suscipit temporibus velit vero?
                </>
            </div>
        </div>
    );
};

export default CommonInformation;