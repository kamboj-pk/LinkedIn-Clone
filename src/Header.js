import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// logo
import logo from './assets/images/linkedin.png';
// import avatar1 from './assets/images/avatar.png';
import HeaderOption from './HeaderOption';
import { useDispatch} from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
      
      dispatch(logout())
      auth.signOut();
  }
  return (
    <div className='header'>
      

      <div class="header__left">
        <img src={logo} alt=""/>

        <div class="header__search">
          <SearchIcon />
          <input placeholder='Search' type="text"/>
        </div>

      </div>

      <div class="header__right"> 
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  )
}

export default Header;
