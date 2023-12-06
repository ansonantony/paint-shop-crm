import  './sidebar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
const supabase = createClient("https://ifqdtmvcxwfifugamoyt.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcWR0bXZjeHdmaWZ1Z2Ftb3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5OTQ4MTYsImV4cCI6MjAxNjU3MDgxNn0.lKBvFyrntH6kjR3g3beIR8Ez48wZgPaiR-isSMIzmxA"
,
);

function SideBar(){
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   setIsOpen(true);
// }

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   setIsOpen(false);
// } 
 const navigate = useNavigate();

const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };


  const closeNav = () => {
    setIsOpen(false);
  };
  async function signOutUser() {
    await supabase.auth.signOut();
    navigate("/");
    //if(error) console.log(error);
  }
    return (
      
        <>
        <div className="root">
       
       <div id="mySidebar" style= {{ width: isOpen ? '250px' : '0', opacity: isOpen ? '1' : '0', display: isOpen ? 'block' : 'none' }} className="d-flex sidebar flex-column flex-shrink-0 p-3 text-bg-dark">
         <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
         <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
           <span className="fs-4 color">Color Canvas</span>
         </a>
         <hr></hr>
         <ul className="nav nav-pills flex-column mb-auto">
           <li className="nav-item">
             
             <Link to="/home" className="nav-link active" aria-current="page">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
               Home
             </Link>
           </li>
          
           <li>
            
           
            <Link to="/orders" className="nav-link text-white">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
               Orders
            </Link> 
           </li>
           <li>
             <Link to="/products" className="nav-link text-white">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
               Products
             </Link>
           </li>
           <li>
             <Link to="/customers" className="nav-link text-white">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
               Customers
             </Link>
           </li>
         </ul>
         <hr></hr>
        
        <div className="dropdown">
        <div className="center">
          
          </div>
           <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
             <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
             <strong>User</strong>
           </a>
           <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
             <li><a className="dropdown-item" href="#">New project...</a></li>
             <li><a className="dropdown-item" href="#">Settings</a></li>
             <li><a className="dropdown-item" href="#">Profile</a></li>
             <li><hr className="dropdown-divider"></hr></li>
             <li><a className="dropdown-item" href="#">Sign out</a></li>
           </ul>
         </div>
       </div>
       <div className="openbt">
       
       </div>
       <div id="main" className='fullwidth' style={{ marginLeft: isOpen ? '250px' : '0' }}>
       {/* <Navbar>
            <Container style={{ margin: '0' }}>
            <Navbar.Brand><button className="openbtn" onClick={()=>openNav()}>&#9776;</button></Navbar.Brand>
                <Navbar.Brand><img style={{height: '60px',marginLeft:'-400px'}} src='src\assets\logo.png'></img></Navbar.Brand>
                <Nav>
                
                    <Nav.Item><Button style={{marginLeft: '050px'}} variant='danger' onClick={()=> signOutUser()}>Log Out</Button></Nav.Item>
                </Nav>
            </Container>
        </Navbar> */}
        <nav>
        
          <button className="openbtn" onClick={()=>openNav()}>&#9776;</button>
            <h2 className='color'>Color Canvas</h2>

          
            <Button variant='danger' onClick={()=> signOutUser()}>Log Out</Button>
            
        </nav>
         
       </div>
       </div>  
      </>
    );
}

export default SideBar;