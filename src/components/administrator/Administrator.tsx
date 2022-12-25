import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './Administrator.css';
import {fetchNodes} from "../../store/actions/nodes-actions";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Administrator = () => {
    const dispatch = useAppDispatch();
    const nodes = useAppSelector(state => state.nodes.all_nodes);


    useEffect(() => {
        dispatch(fetchNodes())
    }, [dispatch])

    return (
        <div className='adm_container'>
            <div className='adm_title'><AdminPanelSettingsIcon/><b>Administrator</b></div>
                    <div className='adm_nodes'>
                        {nodes?.map((node, index) => (
                            <ul key={`${node.id} + ${index}`} >
                                <>{node.admin}</>
                            </ul>
                        ))}
                    </div>
        </div>
    );
};

export default Administrator;