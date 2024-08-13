import React from 'react';

function Profile() {
    return (
        <div className="profile-container">
            <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-bio">Software Developer at XYZ Corp</p>
        </div>
    );
}

export default Profile;
