import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { getUsers } from '../Login Pgaes/localstorage'
// import { getUsers } from '../Login Pgaes/localstorage'
import styles from "./home.module.css"
import {useEffect} from 'react'
import Column1 from './section1/Column1'
import Column2 from './section2/Column2'
import Column3 from './section3/Column3'

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
   <div className={styles.home}>
     <Column1/>
     <Column2/>
     <Column3/>
   </div>
   <Link to="/signin">sign in</Link>
   
   </>
  )
}

export default Home