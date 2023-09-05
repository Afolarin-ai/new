function Functioneventhandle(){
    const handleClick=()=> console.log("Working")
    return(
        <div>
            <h1>Function event handle</h1>
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default Functioneventhandle