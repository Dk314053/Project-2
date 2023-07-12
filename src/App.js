import {Routes,Route, Link} from 'react-router-dom'
import Home from './Component/Navbar Pages/Home';
import SignIn from './Component/Login Pgaes/SignIn';
import SignUp from './Component/Login Pgaes/SignUp';

function App() {
  return (
  <>

  <Routes>
    <Route path='/homepage' element={<Home />} />
   <Route path="/" element={<SignIn />}/>
    <Route path="/signup" element={<SignUp />}/>
    
  </Routes>
   
  
  </>
  );
}

export default App;
