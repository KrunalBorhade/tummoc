import { useSelector } from 'react-redux';
import './App.css';
import { Login } from './componnets/Login';
import { Logout } from './componnets/Logout';
import { selectUser } from './features/userSlice';
import GoogleLogin from "react-google-login"
import axios from "axios"

function App() {
  const user = useSelector(selectUser)
  
  const responseGoogle = (response) => {
    axios({
      method: "POST",
      url:"http://localhost:8000/api/googleLogin",
      data:{tokenId: response.tokenId}
    }).then(response=>{
      console.log(response)
    })
  }

  return (
    <div className="App">
      {user ? <Logout /> : <Login />}
      <h1>Login with Google</h1>
      <GoogleLogin
    clientId="675697374252-vb1g8nji1fda475m7a0gboq9je1pneo3.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
    </div>
  );
}

export default App;
