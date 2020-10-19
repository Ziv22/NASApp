import React, { useEffect, useState } from 'react';
import spinner from '../assets/Spinner-1s-200px.gif'

export default function Loader() {

    return(
        <div className="Spinner">
            <img src={spinner} alt=""/>
        </div>
    )
}