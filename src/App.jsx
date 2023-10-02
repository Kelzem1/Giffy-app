import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import getGifs from './services/getGifs'



export default function App (){
  const [gifs, setGifs] = useState([])

  useEffect(function() {
    getGifs({keyword: 'perros'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className='App'>
      <h1>GIFFY App</h1>
      <section className='App-content'>
      {
        gifs.map(singleGif => {

          
        return <div key={[]}>
          <h4>{singleGif.title}</h4>
          <img alt={singleGif.title} src= {singleGif.url}/>
          </div>
      })
        
      }   
      </section>      
    </div>
  )}
