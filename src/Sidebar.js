import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import cover from './assets/images/cover_photo.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div class="sidebar__recentItem">
            <span class="sidebar__hash"> # </span>
            <p> {topic} </p>
        </div>
    )
    return (
        <div className='sidebar'>
        <div className="sidebar__top">
            <img src={cover} alt="" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.displayName[0]}</Avatar>
            <h2>{user.displayName} </h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">

            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p class="sidebar__statNumber">2534 </p>
            </div>

            <div className="sidebar__stat">
                <p>viewed on post</p>
                <p class="sidebar__statNumber">2511 </p>
            </div>

        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}

        </div>
        </div>

    
    );
}

export default Sidebar
 