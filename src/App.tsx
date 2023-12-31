//import { useState } from 'react'
//import { Home } from '@mui/icons-material';
import './App.css'
import Customers from './pages/Customers';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import Orders from './pages/Orders';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Employee from './pages/Employee';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer';


function App() {
  //const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path :"/",
      element:<LoginForm/>
    },
    {
      path :"/home",
      element:<HomePage/>
    },
    {
      path :"/customers",
      element:<Customers/>
    },
    {
      path :"/orders",
      element:<Orders/>
    },
    {
      path :"/employee",
      element:<Employee/>
    }, 
    {
      path :"/login",
      element:<LoginForm/>
    }
  ]);
  return <>
  <div className='page'>
<RouterProvider router={router}/>
</div>
<Footer/>
  {/* <BrowserRouter>
  <Routes> */}
    {/* <Route index element={<LoginForm/>}/> */}
    {/* <Route index element={<HomePage/>}/>
    <Route path=_{__dirname+"/home"} element={<HomePage/>}/>
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/orders" element={<Orders/>}/>
  </Routes>
  </BrowserRouter> */}

  {/* <SideBar/>
  <div className="container" >
  
  <div className='login'>
      
      <LoginForm/>
  </div>

  </div> */}
  </>;
}

export default App;
