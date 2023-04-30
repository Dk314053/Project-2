import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { getUsers } from '../Login Pgaes/localstorage'
import styles from "./home.module.css"
import {useEffect} from 'react'
import Column1 from './section1/Column1'
import Column2 from './section2/Column2'
import Column3 from './section3/Column3'
import { isUserSignedInAtom } from '../Login Pgaes/Recoil'
import { useRecoilValue, useSetRecoilState } from 'recoil';

function Home() {
  const isUserSignedIn = useRecoilValue(isUserSignedInAtom);
  const isUserSignedOut=useSetRecoilState(isUserSignedInAtom)
    const navigate=useNavigate()
    
    // useEffect(()=>{
    //   let val= JSON.parse(localStorage.getItem("login-success"))
    //   if(val==true){
    //    navigate("/")
    //   }
    // },[])
    
    useEffect(() => {
  
      if (!isUserSignedIn) {
        navigate('/signin');
      }
    }, [isUserSignedIn]);

//     const handleLogout=()=>{
     
// if(isUserSignedInAtom){
//   isUserSignedOut({
//     isUserSignedIn:false,
//     userObj:null
 
//   })
//   navigate("/signin");

// }
//     }

  return (
   <>
   <div className={styles.home}>

     <Column1/>
     <Column2/>
     <Column3/>
     {/* <button onClick={handleLogout}>Logout</button> */}
   </div>
   
   
   </>
  )
}

export default Home