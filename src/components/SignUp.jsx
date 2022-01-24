import React,{useRef} from 'react';
import { Route } from "react-router-dom";
function SignUp() {
    const username=useRef('null');
    const password=useRef('null');
     const name=username.current.value;
     const secret=password.current.value;
    const obj={
        "username":name,
        "secret":secret
    }
   // const t=JSON.stringify(obj);
    const handleclick = () => {
        console.log(obj);
        var axios = require('axios');
        var data = {
            "username":(name),
            "secret":(secret)
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
                console.log(error);
            });
        alert("You are Successfully Registered!!")
    }
    return (
       
        <>
            <div className="wrapper2">
                <form action="" id="loginform">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' ref={username}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                    <input type="password" id='password' ref={password}/>
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
