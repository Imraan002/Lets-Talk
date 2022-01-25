import { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

const projectID = "e9085cef-870a-4a5f-b2e3-5ad5c94bb72f";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials. Try again!");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Let's Talk</h1> 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <div style={{ marginLeft: '150px' }}>
          Not a User? <Route render={({ history }) => (
            <button
              id='signup'
              type='button'
              onClick={() => { history.push('/SignUp') }}
            >
              SignUp
            </button>
          )} />
          
        </div>
        <h1>{error}</h1>
      </div>
      
    </div>
    
  );
};

export default Modal;
