import {useState} from 'react'
import './App.scss'
export const App = () => {
  const [movies, setMovies] = useState([])

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
    .then(res => res.json())
    .then((json) => {
      setMovies(json)
    })
  }

  return (
    <div className='container'>
        <button className='button' onClick={loadMovies}>Carregar filmes</button>

        <h3>Total de Filmes {movies.length}</h3>
        <div>

        </div>
    </div>
  )
}

// https://api.b7web.com/cinema/