import React from 'react';

function profile() {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <h2>User Profile Information</h2>

            <label for="first">First Name:</label><br></br>
            <input type="first" id="first" name="first"/><br></br>

            <label for="last">Last Name:</label><br></br>
            <input type="last" id="last" name="last"/><br></br>

            <label for="email">Email:</label><br></br>
            <input type="email" id="email" name="email"/><br></br>

            <label for="company">Company:</label><br></br>
            <input type="company" id="company" name="company"/><br></br>

            <input type="submit" value="Update Profile"/>
        </div>
    );
}

export default profile;
