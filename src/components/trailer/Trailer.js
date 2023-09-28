import React from 'react'
import { useParams, useResolvedPath } from 'react-router-dom'
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
    let params = useParams();
    const key = params.ytTrailerId;


  return (
    <div className='react-player-container'>
        {(key!=null)}<ReactPlayer url={`https://www.youtube.com/watch?v=${key}`} playing={true} controls={true} width='100%' height='100%'/>:<h1>Trailer not available</h1>
    </div>
  )
}

export default Trailer