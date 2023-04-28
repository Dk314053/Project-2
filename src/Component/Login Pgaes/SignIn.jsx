import React,{useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from './localstorage';
import styles from './SignIn.module.css'
import { useNavigate } from 'react-router-dom';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SignIn() {

  const navigate = useNavigate();

 

  const userNameRef = useRef();
  const passwordRef = useRef();

  const[userList,setUserList] = useState([{
    usename : "",
    password : ""
  }])
  
  const nav = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    if (loginSuccesss) {
      navigate("/");
    }
  }, []);


  const handleSignin=()=>{
    localStorage.setItem("login-success", "true");
    navigate("/");
  

  }


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
      alert(`${userObj?.username} you are succ login`);
      if(userList.find((obj)=> obj?.purchased===true && obj?.username === userNameRef.current.value)){
          nav("/")
      }
    
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
               
                  <button ref={userNameRef} >Sign In With Google  </button>
                

                  <input ref={userNameRef} type='email' placeholder='email' required/>
                 
                  <input ref={passwordRef} type='password' placeholder='password' required/>
              

                <button className = {styles.signInBtn} type="submit" onClick={handleSignin} >SignIn</button> 
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