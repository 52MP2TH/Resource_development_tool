import react from 'react';
import NavBar from '../NavBar';
import ReleaseManagerNavBar from './ReleaseManagerNavBar';

function UploadTemplate(){
    return(
        <div>
            <NavBar />
            <ReleaseManagerNavBar />
            <p>Upload Template</p>
        </div>
    )
}

export default UploadTemplate;