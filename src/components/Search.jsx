import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import MediaCard from './MediaCard';
import stars from '../assets/stars.jpg'
import Loader from './Loader';

export default function Search(props) {
    const [ search , setSearch ] = useState("")
    const [ data , setData ] = useState([])
    const [ isLoading , setIsLoading ] = useState(false)

    const searchUrl = `https://images-api.nasa.gov//search?q=${search}`    

    const searchData = async () =>{
        setIsLoading(true)
        const data = await axios(searchUrl)
        const filteredData = data.data.collection.items
        setData(filteredData)
        setIsLoading(false)
    }

    const searchEnter = e =>{
        if(e.key === 'Enter'){
            searchData()
        }
    }
    return(
        <div className="Search">
            <div className="search-input">
                <label htmlFor="search-input">
                    Search The Universe
                </label>
                    <input 
                        name="search-input"
                        type="text" 
                        onChange={ event => setSearch(event.target.value)}
                        onKeyDown={searchEnter}
                    />
            </div>
            <div id="results-container">
                {data.length === 0 && 
                <Fragment>
                    <img id="image-place-holder" src={stars} alt=""/>
                    <h1 id="image-place-holder-text">No Data Yet</h1>
                </Fragment>
                    }
                {
                    isLoading 
                        ? <Loader/>
                        : data.map(d=> 
                            <MediaCard 
                                key={d.data[0].nasa_id}
                                title={d.data[0].title}
                                description={d.data[0].description}
                                imgUrl={d.links ? d.links[0].href : null}
                                addToLiked={props.addToLiked}
                            />
                    ) 
                }
            </div>
        </div>
    )
}