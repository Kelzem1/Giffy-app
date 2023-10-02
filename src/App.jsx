import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import getGifs from './services/getGifs'
import Gif from './components/Gif'



export default function App (){
  const [gifs, setGifs] = useState([])

  useEffect(function() {
    getGifs({keyword: 'programing'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className='App'>
      <h1>GIFFY App</h1>
      <section className='App-content'>
      {
        gifs.map(({id, title, url}) => { 
        <Gif 
          key={id}
          id={id}
          title={title}
          url={url}
        />
      })
        
      }   
      </section>      
    </div>
  )}
