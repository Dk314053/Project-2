import React,{useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from './localstorage';
import styles from './SignIn.module.css'
import { useNavigate } from 'react-router-dom';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignIn() {
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
              <button style={{ width:"90%", marginLeft:"15px", paddingLeft:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="25" viewBox="2 -3 40 45">
<path fill="#f5bc00" d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#6c19ff" d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#3ddab4" d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"></path><path fill="#f55376" d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"></path><path fill="#2100c4" d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"></path><path fill="#eb0000" d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"></path>
</svg> <span style={{fontSize:"20px" }}>Sign in with google</span></button>
    
       <button style={{ width:"90%",  marginLeft:"15px", paddingLeft:"10px"}}><a href="https://www.freeiconspng.com/img/14895" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/apple-icon-4.png" height="33" width="38"  alt="Free Icon Apple Logo" /></a>
       <span style={{fontSize:"20px", }}>SignIn with Apple</span></button>
                <span>
                  
                  <label> UserName : </label>
                  <input ref={userNameRef} type='text' placeholder='username' required/>
                </span>

                <span>
                  <label>Password : </label>
                  <input ref={passwordRef} type='password' placeholder='password' required/>
                </span>

                <button className = {styles.signInBtn} type="submit"  >SignIn</button> 
              </form>
              <div className={styles.nextbutton}>
                 <button style={{width:"80%" , marginLeft:"2%", backgroundColor:"black", color:"white", padding:"5px 5px "}}>Next</button>
              </div>
            </div>
            <div>
              <span>Don't Have an account ?<Link to="/signup"> <button  className={styles.signUpBtn} >SignUp </button> </Link></span>
            </div>

        </div>
    </div>
    </div>
   
  )
}