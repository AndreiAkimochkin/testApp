import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './Interface.css';
import PersonIcon from '@mui/icons-material/Person';
import {fetchInterfaces} from "../../store/actions/interfaces-actions";

const Interface = () => {
    const dispatch = useAppDispatch();
    const int = useAppSelector(state => state.interfaces.all_int);


    useEffect(() => {
        dispatch(fetchInterfaces())
    }, [dispatch])

    return (
        <div className='int_container'>
            <div className='int_title'><PersonIcon/><b>Interface</b></div>
                    <div className='int_nodes'>
                        {int?.map((int, index) => (
                            <ul key={`${int.id} + ${index}`} >
                                <>{int.caption}, status: <b>{int.status}</b></>
                            </ul>
                        ))}
                    </div>
        </div>
    );
};

export default Interface;