
import Gif from "./Gif";
import { useState, useEffect } from "react";
import getGifs from '../services/GetGifs'

export default function ListOfGifs({ keyword }){

    const [gifs, setGifs] = useState([])

    useEffect(function() {
        getGifs({ keyword })
        .then(gifs => setGifs(gifs))
      }, [keyword])

    return gifs.map(({ id, title, url }) =>
        <Gif id={id}
            key={id} 
            title={title}
            url={url}
            
        
        />
    )
}