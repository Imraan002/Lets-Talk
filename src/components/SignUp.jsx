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
        var flag=1;
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                if(error)
                {
                    console.log(error)
                    alert("Username Already Exists😢. Try different username and password")
                    flag=0;
                }
                
            });
           
            setTimeout(() => {
                if(flag===1)
                {
                    alert("Registration Successful ✔\nThanks for registering😊\nWith Regards---Imraan💖 ")
                }
            }, 1000);
           
        
    }
    return (
       
        <>
            <div className="wrapper2">
                <form action="" id="loginform">
                    <div>
                        <h1 className="signuptitle">Let's Talk</h1>
                        <label style={{marginLeft: '18px',fontSize:'25px' }} htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter UserName" className="input2" required value={username}
                               onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label style={{marginLeft: '18px',fontSize:'22px'}} htmlFor="password">Password</label>
                    <input type="password" className="input2" placeholder="Enter Password" required value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button style={{ marginLeft: '16px' }} onClick={handleclick} type='button' className='signupbtn'>SignUp</button>
                    <br />
                    <br />
                    <br />
                      <div style={{marginLeft:'65px'}}>
                          Back to
                    <Route render={({ history }) => (
                        <button style={{marginLeft:'10px' }}
                            id='login'
                            type='button'
                            onClick={() => { history.push('/') }}
                        >
                            Login
                        </button>
                    )} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;
