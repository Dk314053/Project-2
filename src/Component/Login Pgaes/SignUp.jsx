import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./localstorage";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SignUp() {
  const emailRef = useRef();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const [error,setError] = useState("")

  const nav = useNavigate();



  function handleSubmit(event) {
    event.preventDefault();
    
    var emailRegex =/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(!emailRegex.test(emailRef.current.value)){

      setError('Please enter correct Email');
      return;
    }
    else if(emailRegex.test(emailRef.current.value)){
      setError("")
    }

    var usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(userNameRef.current.value)){
      setError('Please enter correct username');
      return;
    }
    else if(usernameRegex.test(userNameRef.current.value)){
      setError("")
    }

    var passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    if(!passwordRegex.test(passwordRef.current.value)){
      setError('Please Enter valid password');
      return;
    }
    else if(passwordRegex.test(passwordRef.current.value)){
      setError("")
    }


    const users = getUsers();
  

    if(users.find((obj)=>obj?.email === emailRef.current.value)){
      setError("this Email is Already Registered")
      return;
    }

    users.push({
      email: emailRef.current.value,
      username: userNameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      password: passwordRef.current.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    event.target.reset();
    nav("/signin")
  }
  return (
    <div>
       
      <div className={styles.parentCont}>
   
        <div className={styles.registerPage}>
        <FontAwesomeIcon icon={faTwitter} size="2xl" color="blue" />
          <div>
            <h1>Create your account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            
              
              <TextField autoComplete="off" id="outlined-basic" label="Email" variant="outlined"  ref={emailRef} required/>
            
              <TextField autoComplete="off" id="outlined-basic" label="Username" variant="outlined"  ref={userNameRef} required/>
             
              <TextField autoComplete="off" id="outlined-basic" label="Phone" type="number" variant="outlined"  ref={firstNameRef} required/>
            
              <TextField autoComplete="off" id="outlined-basic" label="Lastname" variant="outlined"  ref={lastNameRef} required/>
              <p>
                <h3>Date of birth</h3>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DatePicker/>
              </LocalizationProvider>

              <TextField autoComplete="off" id="outlined-basic" label="Password" type="password" variant="outlined"  ref={passwordRef} required/>
           
            {error && <p style={{ fontSize: '12px', color: 'red' }}>{error}</p>}
            <Button sx={{backgroundColor:"gray" , borderRadius: "2rem" ,padding:"1rem" }} variant="contained" type="submit">Signup</Button>  
         
          </form>

          <div className={styles.signIn}>
            <span >
              Already Registered ??{" "}
            <Link to="/"> <button className={styles.signInBtn} >SignIn</button></Link> 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}