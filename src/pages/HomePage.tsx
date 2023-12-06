import SideBar from "../components/sidebar";


export default function HomePage(){

    return(
        <>
        <div className="head">
        <SideBar/>
        
        <div className="header-content">
            <h1>Welcome to Color Canvas<br></br></h1>
            <h3>Discover a spectrum of possibilities with our color palette.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        </div>
        </>
    );
}