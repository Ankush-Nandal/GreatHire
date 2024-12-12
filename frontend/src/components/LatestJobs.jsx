import React from 'react'
import LatestJobCards from './LatestJobCards';
//import { useSelector } from 'react-redux'; 
import JobsForYou from './JobsForYou.jsx';

const LatestJobs = () => {
    //const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20 lg:px-6'>
            <h1 className='text-4xl font-bold'><span className='text-[#384ac2]'>Latest & Top </span> Job Openings</h1>
            <JobsForYou/>
        </div>
    )
}

export default LatestJobs