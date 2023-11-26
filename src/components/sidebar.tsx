
function SideBar(){
    return(
        <>
        <main className="d-flex flex-nowrap" style={{height: '100%'}}>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '290px',height: '100%'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr></hr>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
    <div className="list-group list-group-flush border-bottom scrollarea">
      <a href="#" className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small>Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>

      
    </div>
    </div>
    
    </ul>
    <hr></hr> 
  </div>
  
    </main>  
      </>
    );
}

export default SideBar;