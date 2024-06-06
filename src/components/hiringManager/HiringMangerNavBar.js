import react from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import './styles/HiringManagerNavBar.css';

function HiringManagerNavBar(props){
    return(
        <div className='hiring-header'>
            <p className='hire-header-start'><Link to='/hiringManager' className='link-button'>Hiring Manager Dashboard</Link></p>
            <p className='hire-header-button end'>
                {
                    props.isHomeHiringScreen == "true" ? <Link to='/' className='link-button'>Back</Link> : <Link to='/hiringManager' className='link-button'>Back</Link>
                }
            </p>
            <p className='hire-header-button'><Link to='/hiringManager/available' className='link-button'>Available</Link></p>
            <p className='hire-header-button'><Link to='/hiringManager/reservedProfiles' className='link-button'>Reserved</Link></p>
            <p className='hire-header-button'><Link to='/hiringManager/onboardedProfiles' className='link-button'>Onboarded</Link></p>
            <p className='hire-header-button'><Link to='/hiringManager/jobs' className='link-button'>Jobs</Link></p>
        </div>
        
    )
}

export default HiringManagerNavBar;