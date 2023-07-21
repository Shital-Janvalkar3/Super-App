import List from "../components/Watchlist/list"
import Profile from '../img/profileSmall.png'
const Movies = ()=>{
    const movies = JSON.parse(window.localStorage.getItem("genres"))
    return(
        <>
        <img src={Profile} style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px", cursor:"pointer" }}/>
        <div style={{width:"100vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
        <p style={{color:"#72DB73",fontSize:"3rem",fontFamily:"Single Day",margin:"2vw"}}>Super app</p>
        <p style={{color:"white",fontSize:"2rem",margin:"2vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List genre={movie}/>)}
        </div>
        </>
    )
}


export default Movies


