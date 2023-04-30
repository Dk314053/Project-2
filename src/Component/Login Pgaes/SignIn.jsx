import React,{useState, useRef, useEffect} from 'react'
import { isUserSignedInAtom } from './Recoil';
import { useSetRecoilState } from 'recoil';
import { getUsers } from './localstorage';
import styles from './SignIn.module.css'
import { useNavigate } from 'react-router-dom';
import {faTwitter,faApple} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { FcGoogle, IconName } from "react-icons/fc";



export default function SignIn() {

  

  const setUser = useSetRecoilState(isUserSignedInAtom);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const[userList,setUserList] = useState([{
    usename : "",
    password : ""
  }])
  
  const nav = useNavigate();

  useEffect(()=>{
    const data = getUsers(); 
 
    setUserList(data);
   },[])
  

  function handleSubmit(event){
    event.preventDefault();
    
    if(userNameRef.current.value === "" || passwordRef.current.value === ""){
      alert("FIll the form first")
    }


     const userObj = userList.find((obj)=> obj?.username === userNameRef.current.value && obj?.password === passwordRef.current.value)

    if(userObj !== undefined){
      setUser(true);
      alert(`${userObj?.username} you are succ login`);
     nav("/")
    
    }else{
      alert("please register first")
    }
   
  }

  function handleSignUp(){
    nav('/signup')
  }
  return (

   <div>
      
    <div className={styles.parentCont}>
  
      <div className = {styles.login}>
      <FontAwesomeIcon icon={faTwitter} size='2xl' color='blue' />
            <div>
                <h1>Sign in to Twitter</h1>
            </div>
            <div>
              <form  onSubmit={handleSubmit}>
              
              <IconButton variant="contained"  sx={{borderRadius:10 ,border: 1 , backgroundColor:'white',color:'black'}}><FcGoogle /> Sign In With Google</IconButton>
                  
                  <IconButton variant="contained"  sx={{borderRadius:10 ,border: 1,backgroundColor:'white',color:'black'}}><FontAwesomeIcon icon={faApple}  /> Sign In With Apple</IconButton>
                

                  <input className={styles.input} ref={userNameRef} type='username' placeholder='username' required/>
                 
                  <input  className={styles.input}  ref={passwordRef} type='password' placeholder='password' required/>
              


                <Button variant="contained"  type="submit" sx={{borderRadius:2 ,backgroundColor:'black',color:'White'}}>SignIn</Button>
              </form>
            </div>
            <div>
              <span>Don't Have an account ?? <button onClick={handleSignUp} className={styles.signUpBtn} >SignUp </button> </span>
            </div>

        </div>
    </div>
    </div>
   
  )
}