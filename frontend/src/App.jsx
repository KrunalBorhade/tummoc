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
      {user ? <Logout /> : <Login /> }
    </div>
  );
}

export default App;
