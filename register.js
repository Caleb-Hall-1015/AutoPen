import React from 'react';

function register() {
    return (
        <div className="Register">
        <body>
        <h1>Register</h1>
        <h2>Create new account:</h2>
        <form name="registerForm" action="/submit-your-form-endpoint" onsubmit="return validateForm()" method="post">
            <label for="email">Email:</label><br></br>
            <input type="email" id="email" name="email" required/><br></br>
    
            <label for="username">Username:</label><br></br>
            <input type="text" id="username" name="username" required/><br></br>
    
            <label for="password">Password:</label><br></br>
            <input type="password" id="password" name="password" required/><br></br>
    
            <label for="confirmPassword">Confirm Password:</label><br></br>
            <input type="password" id="confirmPassword" name="confirmPassword" required/><br></br>
    
            <input type="submit" value="Register"/>
        </form>
        </body>
        </div>
    );
}

export default register;
