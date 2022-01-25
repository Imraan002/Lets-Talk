import { Route } from "react-router-dom";
import { useState } from "react";
function SignUp() {
    const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
    const handleclick = () => {
        var axios = require('axios');
        const data = {
            "username": username,
            "secret": password,
            
        };
       
        var config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': '{{b4397d56-e48f-4154-9d34-0fe7e64a5732}}'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                if(error)
                {
                    console.log(error)
                    alert("Username Already Exists. Try different username and password")
                }
            });
        alert("Registration Successful")
    }
    return (
       
        <>
            <div className="wrapper2">
                <form action="" id="loginform">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' required value={username}
                               onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                    <input type="password" id='password'required value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button style={{ marginLeft: '180px' }} onClick={handleclick} type='button' id='submitbtn'>SignUp</button>
                    <br />
                    Back to
                    <Route render={({ history }) => (
                        <button
                            id='login'
                            type='button'
                            onClick={() => { history.push('/') }}
                        >
                            Login
                        </button>
                    )} />
                </form>
            </div>
        </>
    )
}

export default SignUp;
