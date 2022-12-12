import LandingBody from '../Components/landingbody';
import Navbar from '../Components/navbar';
import NavbarLog from '../Components/navbarlog';

const Landing : React.FC = () => {

    return(
        <div className="landing">
            <Navbar/>
            {/* <NavbarLog/> */}
            <LandingBody/>
        </div>
    )   
}

export default Landing