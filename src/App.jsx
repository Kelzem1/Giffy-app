
import { useState } from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'



export default function App (){
  const [keyword, setKeyword] = useState('Pikachu')
  return (
    <div className='App'>
      <section className='App-content'>
      <button onClick={() => setKeyword('Mew')}>Cambiar Gif</button>
      <ListOfGifs keyword= {keyword} />
      </section>      
    </div>
  )
}
