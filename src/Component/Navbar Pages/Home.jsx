import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import { getUsers } from '../Login Pgaes/localstorage'
import styles from "./home.module.css"
import {useEffect} from 'react'
import Column1 from './section1/Column1'
import Column2 from './section2/Column2'
import Column3 from './section3/Column3'
import { isUserSignedInAtom } from '../Login Pgaes/Recoil'
import { useRecoilValue} from 'recoil';

function Home() {
  const isUserSignedIn = useRecoilValue(isUserSignedInAtom);
  
    const navigate=useNavigate()

    
    useEffect(() => {
  
      if (!isUserSignedIn) {
        navigate('/signin');
       
        
     
      }
    }, [isUserSignedIn]);



  return (
   <>
   <div className={styles.home}>
   
     <Column1/>
     <Column2/>
     <Column3/>
    
   </div>
   
   
   </>
  )
}

export default Home