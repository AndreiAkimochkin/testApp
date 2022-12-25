import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './Nodes.css';
import ComputerIcon from '@mui/icons-material/Computer';
import {fetchMetrics} from "../../store/actions/metrics-actions";

const Nodes = () => {
    const dispatch = useAppDispatch();
    const nodes = useAppSelector(state => state.nodes.all_nodes);


    useEffect(() => {
        dispatch(fetchMetrics())
    }, [dispatch])

    return (
        <div className='nodes_container'>
            <div className='nodes_title'><ComputerIcon/><b>Nodes</b></div>
                    <div className='nodes'>
                        {nodes.map((nodes , index) => (
                            <ul key={`${nodes.id} + ${index}`}  className='node'>
                                <p><b>Status: </b>{nodes.status}</p>
                                <p><b>Interface: </b>{nodes.interface}</p>
                                <p><b>Caption: </b>{nodes.caption}</p>
                                <p><b>Admin: </b>{nodes.admin}</p>
                            </ul>
                        ))}
                    </div>
        </div>
    );
};

export default Nodes;