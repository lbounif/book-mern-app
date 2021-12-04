import React, {useState} from "react"
import PropTypes from 'prop-types';
import './login.css'

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const loginUser = async(credentials) => {
    return fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   const handleSubmit = async e => {
    e.preventDefault();
    // let token = await loginUser({
    //   username,
    //   password
    // });
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTE5N2UyZmFiYWFiMjJjZWYyZTlhNjIiLCJlbWFpbCI6Imx5bmRhMUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJuYW1lMSIsImlhdCI6MTYyOTA2MDY2MiwiZXhwIjoxNjI5MDYwOTYyfQ.rq8ZzeT1gMWaDbh8_tcN6r5vmEi43QMxI2kQg701pdM"
    setToken(token);
  }
    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
      </div>
    )
  }
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

  export default Login