import react from 'react';
import { Link } from 'react-router-dom';

import './styles/ReleaseManagerNavBar.css'

function ReleaseManagerNavBar(props){
    return(
        <div>
            <div className='release-header'>
                <p className='release-header-start'>Releasing Manager Dashboard</p>
                <p className='release-header-button end'>
                    { 
                        props.isHomeReleaseScreen == "true" ?  <Link to='/' className='link-button'>Back</Link> : <Link to='/releaseManager' className='link-button'>Back</Link>
                    }
                </p>
                <p className='release-header-button'><Link to="viewResources" className='link-button'>Resources</Link></p>
            </div>
        </div>
    )
}

export default ReleaseManagerNavBar;