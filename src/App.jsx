
import { useState } from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'



export default function App (){
  return (
    <div className='App'>
    <h1>Gif App</h1>
      <section className='App-content'>
      <Link to='/gif/pikachu'>Gif Pikachu </Link>
      <Link to='/gif/mew'>Gif Mew</Link>
      <Link to='/gif/charmander'>Gif Bulbasur</Link>
      <Route
      component={ListOfGifs}
       path='/gif/:keyword'/>
      
      </section>      
    </div>
  )
}
