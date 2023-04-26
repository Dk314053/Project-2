import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { getUsers } from '../Login Pgaes/localstorage'
// import { getUsers } from '../Login Pgaes/localstorage'
import {useEffect} from 'react'
function Home() {
    const navigate=useNavigate()
    useEffect(() => {
        const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));
    
        if (!loginSuccesss) {
          navigate("/signin");
        }
      }, []);

  return (
   <>
   <Link to="/signin">sign in</Link>
   <h1>This is home page</h1>
   </>
  )
}

export default Home