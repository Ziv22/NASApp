import axios from 'axios'
import React, { useEffect, useState} from 'react';
import MediaCard from './MediaCard';
import Loader from './Loader';
const url = 'http://localhost:8080/images'

export default function Favourites(props) {
    const [favourites,setFavourites] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        (async ()=>{
            try{
                const id = props.match ? props.match.params.id : undefined
                setIsLoading(true)
                const images = await axios.get(`${url}/${id}`)
                setFavourites(images.data)
                setIsLoading(false)
            }
            catch(err){
                console.log(err);
            }
        })()
    },[])

    return(
        <div className="Favourites">
            {isLoading 
                ? <Loader/> 
                : favourites.map(f => 
                    <MediaCard 
                        key={f._id}
                        _id={f._id}
                        title={f.title}
                        imgUrl={f.imgUrl ? f.imgUrl : null}
                        description={f.description}
                        removeFromLiked={props.removeFromLiked}
                    />
                )
            
            }
        </div>
    )}