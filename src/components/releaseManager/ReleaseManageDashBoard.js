import react from 'react';
import NavBar from '../NavBar';
import CardBox from '../CardBox';
import './styles/ReleaseManager.css';
import ReleaseManagerNavBar from './ReleaseManagerNavBar';

function ReleaseManagerDashBoard(){
    const resourseCardData = [];
    resourseCardData.push({cardTitle:"Download Template", cardSubTitle:"Download and share the template to releasing resource, to enter the details",cardButtonContent:"Download", navigateTo:"downloadTemplate"});
    resourseCardData.push({cardTitle:"Upload Template", cardSubTitle:"After entering details, Upload the template by clicking on the dropbox below",cardButtonContent:"Dropbox", navigateTo:"uploadTemplate"});
    resourseCardData.push({cardTitle:"Available Resources", cardSubTitle:"Profiles of resources released from your account",cardButtonContent:"View Resources", navigateTo:"viewResources"});

    return(
        <div>
            <NavBar />
            <ReleaseManagerNavBar isHomeReleaseScreen="true"/>
            <div className='release-content'>
                <p className='release-content-title'>Resources</p>
                <div className='release-subcontent-cards'>
                    {resourseCardData.map((cardDetail) => <CardBox cardDetails={cardDetail} />)}
                </div>
            </div>
        </div>
    )
}

export default ReleaseManagerDashBoard;