import React from 'react';
import './App.css';
import Applications from "./components/applications/Applications";
import Interface from "./components/interface/Interface";
import Administrator from "./components/administrator/Administrator";
import Metrics from "./components/metrics/Metrics";
import Nodes from "./components/nodes/Nodes";
import Status from "./components/status/Status";
import CommonInformation from "./components/common-information/CommonInformation";
import Groups from "./components/groups/Groups";

function App() {
    return (
        <div className="container">
            <div className='block_left'>
                <Status/>
                <CommonInformation/>
                <Groups/>
            </div>
            <div className='block_center'>
                <Nodes/>
            </div>
           <div className="block_right">
               <Metrics/>
               <Interface/>
               <Administrator/>
               <Applications/>
           </div>
        </div>
    );
}

export default App;
