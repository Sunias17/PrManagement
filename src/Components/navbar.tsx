import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Navbar : React.FC = () => {

    return(
        <div className="navbar">
            <div>
                <img src='./logo.png' alt='logo' className="logo"/> 
            </div>
            <div className="search">
                <IconButton size='small' sx={{padding:"0px", marginLeft:"10px"}}><SearchIcon/></IconButton>
                <input className="input" placeholder='Search'></input> 
            </div>
            <div className='content'>
                <div>SIGN UP</div>
                <div>SIGN IN</div>
                <div>ABOUT US</div>
            </div>
    </div>
    )   
}

export default Navbar