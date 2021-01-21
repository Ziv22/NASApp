import React from 'react';
import { Link } from 'react-router-dom';

export default function Media(props) {
    if(props.location === "/Favourites"){
        return (
        <Link to={`/Favourites/${props.id}`}>
            <img className="card-image" src={props.imgUrl} alt=""/>
        </Link>
        )
    } else if(props.location === "/Home"){   
        if(props.imgUrl && props.imgUrl.includes("youtube")){
            return <iframe className="video-image" src={props.imgUrl}></iframe>
        }   
        return <img className="card-image" src={props.imgUrl} alt=""/>
    }else{
        return <img className="card-image" src={props.imgUrl} alt=""/>
    }
}
