import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(state => state.user.value)
    const theme = useSelector(state => state.theme.value)

    const dynamicStyles = {
        color: theme ? theme : 'black'
    }

    return (
        <div className="profile-container">
            <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
            <h2 className="profile-name" style={dynamicStyles}>John Doe - Username: {user.username}</h2>
            <p className="profile-bio">Software Developer at XYZ Corp - {user.email}</p>
        </div>
    );
}

export default Profile;
