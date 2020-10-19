import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Media(props) {
    const [videoSize , setVideoSize] = useState(0)

    useEffect(()=>{
        (   async ()=>{

            }
        )()   
    },[])

    if(props.location === "/Favourites"){
        return (
        <Link to={`/Favourites/${props.id}`}>
            <img className="card-image" src={props.imgUrl} alt=""/>
        </Link>
        )
    } else if(props.location === "/Home"){
        return (
        <iframe className="video-image" src={props.imgUrl}></iframe>
        )
    }else{
        return <img className="card-image" src={props.imgUrl} alt=""/>
    }
}
