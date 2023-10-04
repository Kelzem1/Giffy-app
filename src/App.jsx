
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'



export default function App (){
  return (
    <div className='App'>
    <h1>Gif App</h1>
      <Link to='/gif/pikachu'>Gif Pikachu </Link>
      <Link to='/gif/mew'>Gif Mew</Link>
      <Link to='/gif/charmander'>Gif Bulbasur</Link>
      <section className='App-content'>
      <Route
      component={ListOfGifs}
       path='/gif/:keyword'
       />
      </section>      
    </div>
  )
}
