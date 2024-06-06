import react from 'react';
import { Outlet } from 'react-router-dom';
import './Home.css';
import NavBar from './NavBar';
import CardBox from './CardBox';

function Home(){
    const resourseCardData = [];
    resourseCardData.push({cardTitle:"Hiring Manager", cardSubTitle:"Create Jobs. View/reserve/onboard available resources",cardButtonContent:"Login", navigateTo:"/hiringManager"});
    resourseCardData.push({cardTitle:"Releasing Manager", cardSubTitle:"Create Profiles of releasing resource using template provided.",cardButtonContent:"Login", navigateTo:"/releaseManager"});

    return(
        <div>
            <NavBar />
            <div className='header-subtitle'>
                <h1 className='main-heading'>IDE Internal Staffing Board</h1>
                <div className='resourse-cards'>
                    {resourseCardData.map((cardDetail) => <CardBox cardDetails={cardDetail} />) }
                </div>
                
            </div>
        </div>
    )
}

export default Home;