import {Route} from 'react-router-dom'
import Favourites from './Favourites'
import Search     from './Search'
import Home       from './Home'
import axios from 'axios'
import React from 'react';



export default function Container() {
    const addToLiked = async data =>{
        const image = {
            imgUrl:      data.imgUrl,
            title:       data.title,
            description: data.description
        }
        try{
            await axios.post("http://localhost:8080/image",image)
        }
        catch(err){
            console.log(err)
        }
    }
    const removeFromLiked = async id =>{
        try{
            await axios.delete(`http://localhost:8080/image/${id}`)
        }
        catch(err){
            console.log(err)
        }
    }


    return( 
    <div id="container">
        <Route path="/Home" exact render={()=> <Home />}/>
        <Route path="/Search" exact render={()=> <Search addToLiked={addToLiked} removeFromLiked={removeFromLiked} />}/>
        <Route path="/Favourites" exact render={()=> <Favourites addToLiked={addToLiked} removeFromLiked={removeFromLiked} />}/>
        <Route path="/Favourites/:id" exact render={({match})=> <Favourites match={match} addToLiked={addToLiked} removeFromLiked={removeFromLiked}/>} /> 
    </div>
    )
}