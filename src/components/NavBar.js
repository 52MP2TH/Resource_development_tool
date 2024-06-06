import react from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    function handlePageChange(path){
        console.log("zxcvbnm");
        <Link to={"/"+path} />
    }

    return(
        <div className='header'>
            <div className='header-title'>
                <div className='header-title-start'><Link className='link-button' to="/">Resource Development Portal</Link></div>
                <p className='header-title_button end'><Link className='link-button' to="/">Home</Link></p>
                <p className='header-title_button'><Link className='link-button' to="/hiringManager">Hiring Manger</Link></p>
                <p className='header-title_button'><Link className='link-button' to="/releaseManager">Release Manager</Link></p>
                <p className='header-title_button'><Link className='link-button' to="/reports">Reports</Link></p>
            </div>
        </div>
    )
}

export default NavBar;