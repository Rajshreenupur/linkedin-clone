import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./Header.css"
import linkedin from "./assests/ln.png"
import avatar from "./assests/avatar.jpg"
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const dispatch=useDispatch();

  const logoutOfApp =() =>{
    dispatch(logout())
    auth.signOut();
  }

  return (
  <div className="header">

    <div className="header_left">
        <img src={linkedin} alt=""/>

        <div className="header_search">
            <SearchIcon/>
            <input type ="text" placeholder="Search "/>

        </div>
    </div>

    <div className="header_right">
        <HeaderOption Icon={HomeIcon} title= "Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title= "My Network"/>

        <HeaderOption Icon={BusinessCenterIcon} title= "Jobs"/>

        <HeaderOption Icon={ChatIcon} title= "Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title= "Notification"/>
        <HeaderOption avatar={avatar} title= "me" onClick={logoutOfApp}/>

    </div>
  </div>
  );
}

export default Header;
