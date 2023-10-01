import { useState } from 'react'
import './App.css'

const GIFS = ['https://media0.giphy.com/media/jdAaYpQGtfSeI/giphy.gif?cid=ecf05e4707gf9l2pixjaisas095zjspc37qrwxr2r9tr62yl&ep=v1_gifs_search&rid=giphy.gif&ct=g',
'https://media2.giphy.com/media/JWsWyAUZhOZxK/giphy.gif?cid=ecf05e4707gf9l2pixjaisas095zjspc37qrwxr2r9tr62yl&ep=v1_gifs_search&rid=giphy.gif&ct=g']

const DIFFERENT_GIFS = ['https://media2.giphy.com/media/Hyl3lQlshKKkg/giphy.gif?cid=ecf05e474vi57ppxsh0y9rxjg79ljtnpmmp4wqwgrf0u9l74&ep=v1_gifs_related&rid=giphy.gif&ct=g']
const App = () =>{
  const [gifs, setGifs] = useState(GIFS)
  return (
    <div>
      <h1>GIFFY App</h1>
      {
        gifs.map(singleGif => <img src= {singleGif} />)
      }
      <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar GIFS</button>
    </div>
  )
}

export default App
