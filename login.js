import React from 'react';

function login() {
    return (
        <div className="login">
            <h1>Log In</h1>
            <label for="username">Username:</label><br></br>
            <input type="text" id="username" name="username" required/><br></br>
    
            <label for="password">Password:</label><br></br>
            <input type="password" id="password" name="password" required/><br></br>

            <input type="submit" value="Log In"/>
        </div>
    );
}

export default login;
