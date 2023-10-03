import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import getGifs from './services/getGifs'
import Gif from './components/Gif'
import ListOfGifs from './components/ListOfGifs'



export default function App (){
  const [gifs, setGifs] = useState([])

  useEffect(function() {
    getGifs({keyword: 'paraguay'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className='App'>
      <section className='App-content'>
      <ListOfGifs gifs={gifs} />
      </section>      
    </div>
  )
}
