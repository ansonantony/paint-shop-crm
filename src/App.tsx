//import { useState } from 'react'
//import { Home } from '@mui/icons-material';
import './App.css'
// import SideBar from './components/sidebar';
import Customers from './pages/Customers';
//import SideBar from './components/sidebar';
//import LoginForm from './pages/LoginForm';
import HomePage from './pages/HomePage';
import Orders from './pages/Orders';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {
  //const [count, setCount] = useState(0)

  return <>
  <BrowserRouter>
  <Routes>
    {/* <Route index element={<LoginForm/>}/> */}
    <Route index element={<HomePage/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/orders" element={<Orders/>}/>
  </Routes>
  </BrowserRouter>

  {/* <SideBar/>
  <div className="container" >
  
  <div className='login'>
      
      <LoginForm/>
  </div>

  </div> */}
  </>;
}

export default App;
