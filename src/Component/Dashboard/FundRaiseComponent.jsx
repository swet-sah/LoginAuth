import React from 'react';
import CardArray from './CardArray';
import TaskArray from './TaskArray';
import UserArray from './UserArray';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';
import FundArray from './FundArray';
import Fundgraph from './Charts/Fundgraph';
import FundRaiseCard from './FundRaiseCard';
import FundTrackingComponent from './FundTrackingComponent';

const FundRaiseComponent = () => {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
       <div className='my-5'> <FundRaiseCard /></div>
        <div className="row d-flex align-items-center">

          <div className="col-lg-6">
            <h3 className='mx-3'>Welcome back, <span className='text-primary'>Paden John</span></h3>
            <Fundgraph />
          </div>
          <div className="col-lg-6 p-5">
            <FundArray />
          </div>
          <div className='my-5'>
            <FundTrackingComponent/>
          </div>
        </div>

      </div>
    </>
  );
};

export default FundRaiseComponent;
