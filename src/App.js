import {Routes,Route} from 'react-router-dom'
import Home from './Component/Navbar Pages/Home';
import SignIn from './Component/Login Pgaes/SignIn';
import SignUp from './Component/Login Pgaes/SignUp';
import Sidebar from './Component/Sidebar';
import Twittes from './Component/Twittes';
import CreateTweet from './Component/CreateTweet';


function App() {
  return (
  <>
 {/* <Trends/> */}
  
  <div className='twitter'>
  <Sidebar/>
  <Twittes/>
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
