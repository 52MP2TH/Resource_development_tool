import react, { useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import "./styles/HiringManager.css";

import NavBar from '../NavBar';
import CardBox from '../CardBox';
import HiringManagerNavBar from './HiringMangerNavBar';
// import ViewProfiles from './ViewProfiles';
// import ReservedProfiles from './ReservedProfiles';
// import OnboardedProfiles from './OnboardedProfiles';
// import ViewJobs from './ViewJobs';
// import CreateJobs from './CreateJobs';


function HiringManagerDashBoard(){
    // const [pageDisplay, setPageDisplay] = useState("HomeHiringManager");
    
    const resoursesCardData = [];
    resoursesCardData.push({cardTitle:"Available Resources", cardSubTitle:"View all the available resouces deatils, lock/unlock the resources.",cardButtonContent:"View Profiles", navigateTo:"profiles"});
    resoursesCardData.push({cardTitle:"Reserved Resources", cardSubTitle:"View Reserved resouces of your account, onboard/unlock the resources.",cardButtonContent:"View Reserved Profiles",navigateTo:"reservedProfiles"});
    resoursesCardData.push({cardTitle:"Onboarded Resources", cardSubTitle:"View the onboarded resources from to your account.",cardButtonContent:"View Onboarded Profiles",navigateTo:"onboardedProfiles"});
    
    const jobsCardData = [];
    jobsCardData.push({cardTitle:"View Jobs", cardSubTitle:"View the jobs which are posted from your account",cardButtonContent:"View Jobs", navigateTo:"/hiringManager/jobs"});
    jobsCardData.push({cardTitle:"Create Jobs", cardSubTitle:"Create job with the necessary fields like skills, minimum exp, shore etc.,",cardButtonContent:"Create Job",navigateTo:"/hiringManager/createJob"});

    // function handlePageDisplay(pageDisplay){
    //     switch(pageDisplay){
    //         case 'HomeHiringManager':
    //             setPageDisplay("HomeHiringManager");
    //             return '';
    //         case 'ViewProfiles':
    //             return <ViewProfiles />;
    //         case 'ViewReservedProfiles':
    //             return <ReservedProfiles />;
    //         case 'ViewOnboardedProfiles':
    //             return <OnboardedProfiles />;
    //         case 'ViewJobs':
    //             return <ViewJobs />;
    //         case 'CreateJobs':
    //             return <CreateJobs />;
    //         default:
    //             setPageDisplay("HomeHiringManager")
    //             return "";
    //     }
    // }
    
    return(
        <div>
            <NavBar />
            <HiringManagerNavBar isHomeHiringScreen="true" />
            {/* <Outlet /> */}
            {/* { pageDisplay != "HomeHiringManager" ? handlePageDisplay(pageDisplay):  */}
                <div>
                    <div className='hire-resources-section'>
                        <p className='hire-titles'>Resources</p>
                        <div className='hire-resourses-cards'>
                            {resoursesCardData.map((cardDetail) => <CardBox cardDetails={cardDetail} />) }
                        </div>
                    </div>

                    <div className='hire-jobs-section'>
                        <p className='hire-titles'>Jobs</p>
                        <div className='hire-jobs-cards'>
                            {jobsCardData.map((cardDetail) => <CardBox cardDetails={cardDetail} />) }
                        </div>
                    </div>
                </div>
            {/* } */}
        </div>
    )
}

export default HiringManagerDashBoard;