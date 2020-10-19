import React from 'react';
import { useState } from 'react';
import { Link, useLocation} from "react-router-dom";
import Media from "./Media"

export default function MediaCard(props) {
    let [liked, setLiked] = useState(true)
    let location = useLocation()

    const addToLiked = () =>{
        setLiked(!liked)
        props.addToLiked(props)
    }
    const removeFromLiked = () =>{
        setLiked(!liked)
        props.removeFromLiked(props._id)
    }


    return(
        <div className="MediaCard">
            <h2 className="card-title">{props.title}</h2>
            <Media imgUrl={props.imgUrl} location={location.pathname} id={props._id}/>
            <Description description={props.description} location={location.pathname}/>
            {location.pathname.includes("/Search")
                            &&  (liked 
                                ? <button onClick={addToLiked}> Like </button>  
                                : <button > Unlike </button>  
                            )
            } 

            {location.pathname.includes("/Favourites") 
                            &&  (liked 
                                    ? <button onClick={removeFromLiked}> Unlike </button>  
                                    : <button onClick={addToLiked}> Like </button>  
                                )
            } 
            <hr/>
        </div>
    )
}


function Description(props){
    if(props.location.includes("/Favourites/") || props.location ===  "/Home"){
        return (
            <>
                <p className="description-container">{props.description}</p>
                <div><Link to="/Favourites"> Back </Link></div>
            </>
            )
    }
    return null}