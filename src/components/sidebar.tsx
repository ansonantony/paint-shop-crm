import  './sidebar.css'
import { useState } from 'react';

function SideBar(){
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   setIsOpen(true);
// }

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   setIsOpen(false);
// } 
const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
    return (
      
        <>
        <div className="root">
       
       <div id="mySidebar" style= {{ width: isOpen ? '250px' : '0', opacity: isOpen ? '1' : '0', display: isOpen ? 'block' : 'none' }} className="d-flex sidebar flex-column flex-shrink-0 p-3 text-bg-dark">
         <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
         <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
           <span className="fs-4">Sidebar</span>
         </a>
         <hr></hr>
         <ul className="nav nav-pills flex-column mb-auto">
           <li className="nav-item">
             <a href="#" className="nav-link active" aria-current="page">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
               Home
             </a>
           </li>
          
           <li>
             <a href="/orders" className="nav-link text-white">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
               Orders
             </a>
           </li>
           <li>
             <a href="#" className="nav-link text-white">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
               Products
             </a>
           </li>
           <li>
             <a href="/customers" className="nav-link text-white">
               <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
               Customers
             </a>
           </li>
         </ul>
         <hr></hr>
         <div className="dropdown">
           <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
             <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
             <strong>mdo</strong>
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
       <button className="openbtn" onClick={()=>openNav()}>&#9776;</button>
       </div>
       <div id="main" style={{ marginLeft: isOpen ? '250px' : '0' }}>
       
         
       </div>
       </div>  
      </>
    );
}

export default SideBar;