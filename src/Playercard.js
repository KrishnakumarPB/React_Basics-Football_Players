
import "./styles.css";

function Playercard(props)
{
    console.log(props)
    return(

        <div className="player-card">
            <img src={props.imgUrl}></img>
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
        </div>
    )
}

export default Playercard