// import {Routes,Route} from 'react-router-dom'
// import Home from './Component/Navbar Pages/Home';
// import SignIn from './Component/Login Pgaes/SignIn';
// import SignUp from './Component/Login Pgaes/SignUp';

import ComposeForm from "./Component/mainTweet.jsx/ComposeForm";
import Timeline from "./Component/mainTweet.jsx/Timeline";
import {FaTwitter} from 'react-icons/fa'
import tweets from './tweets.json';
import './App.css'

function App() {

  return (
  <>
       <div>
          <FaTwitter className = "app-logo"  size = "2em"/>
          <ComposeForm  />
          <hr/>
          <Timeline tweets={tweets} />
       </div>

  {/* <Routes>
<Route path='/' element={<Home />} />
<Route path="/signin" element={<SignIn />}/>
<Route path="/signup" element={<SignUp />}/>

  </Routes> */}
  
  </>
  );
}

export default App;
