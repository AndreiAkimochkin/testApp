import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import './Metrics.css';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {fetchMetrics} from "../../store/actions/metrics-actions";
import 'chart.js/auto'
import {Bar} from "react-chartjs-2";

const Metrics = () => {
    const dispatch = useAppDispatch();
    const metrics = useAppSelector(state => state.metrics.all_metrics);


    const state= {
        labels : [''],
        datasets: [
            {
                label: 'CPU',
                data:metrics.find(item =>item.cpu_utilization)?.cpu_utilization,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
                borderWidth: 1,

            },
            {
                label: 'Disk',
                data:metrics.find(item =>item.disk_utilization)?.disk_utilization,
                borderColor: 'rgb(99,169,255)',
                backgroundColor: 'rgba(231,202,13,0.5)',
                borderWidth: 1,
            },
            {
                label: 'Memory',
                data:metrics.find(item =>item.memory_utilization)?.memory_utilization,
                borderColor: 'rgb(185,99,255)',
                backgroundColor: 'rgba(16,15,15,0.5)',
                borderWidth: 1,
            },
        ]
    }


    useEffect(() => {
        dispatch(fetchMetrics())
    }, [dispatch])

    return (
        <div className='metrics_container'>
            <div className='metrics_title'><ShowChartIcon/><b>Metrics</b></div>
                    <div className='metrics_nodes'>
                        <Bar data={state} />
                    </div>
        </div>
    );
};

export default Metrics;