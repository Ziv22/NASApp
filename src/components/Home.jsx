import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MediaCard from './MediaCard';
import Loader from './Loader';
import { trackPromise } from 'react-promise-tracker';

export default function Home() {
    const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=1VD6hZEJxLefW2cJqkE91m0gg7UzqCZB0ghbSnam'
    const [apod,setApod] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
       (async () =>{
           try{
               setIsLoading(true)
               const apodData = await axios(nasaUrl)
               setApod(apodData.data)
               setIsLoading(false)
           }
            catch(err){
                console.log(err);
            }
        })()
    },[])

    return(
        <div className="Home">
            {isLoading ? <Loader/> :<MediaCard title={apod.title} imgUrl={apod.url}  description={apod.explanation}/>}
        </div>
    )
}