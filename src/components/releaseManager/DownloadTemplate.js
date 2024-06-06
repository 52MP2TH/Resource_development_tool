import react from 'react';
import NavBar from '../NavBar';
import ReleaseManagerNavBar from './ReleaseManagerNavBar';

function DownloadTemplate(){
    return(
        <div>
            <NavBar />
            <ReleaseManagerNavBar />
            <p>Download Template</p>
        </div>
    )
}

export default DownloadTemplate;