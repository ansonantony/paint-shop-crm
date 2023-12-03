
export default function CustomerForm(){

    return(
        <>
        <form action="/customers">
            <label>Name</label>
            <input type="text" />
            <br></br>
            <label>Date of Birth</label>
            <input type="date" />
            <br></br>
            <label>Address</label>
            <input type="textarea" />
            <br></br>
            <input type="range" name="" id="" />
        </form>
        </>
    );
}