import React from 'react';

function start() {
    return (
        <div className="Start">
            <html>
            <head>
                <title>Launch Scan</title>
            </head>
            <body>

                <h2>Launch Scan</h2>

                <form action="/submit-form" method="post">
                    <label for="targetIp">Target IP:</label><br></br>
                    <input type="text" id="targetIp" name="targetIp" placeholder="Enter Target IP"/><br></br>

                    <label for="scannerIp">Scanner IP:</label><br></br>
                    <input type="text" id="scannerIp" name="scannerIp" placeholder="Enter Scanner IP"/><br></br>

                    <label for="scanType">Scan Type:</label><br></br>
                    <select id="scanType" name="scanType">
                        <option value="lightweight">Lightweight</option>
                        <option value="fast">Fast</option>
                        <option value="balanced">Balanced</option>
                        <option value="deep">Deep</option>
                    </select><br></br>

                    <input type="submit" value="Start Scan"/>
                </form>

            </body>
            </html>
        </div>
    );
}

export default start;
