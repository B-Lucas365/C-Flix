import {useState} from 'react'
import './App.scss'
import {Movie} from './types/Movie'
import {Card} from './Card'


export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])

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
        <div className='cardbox'>
          {movies.map((item, index) => (
            <Card title={item.titulo} avatar={item.avatar} key={index}/>
          ))}
        </div>
    </div>
  )
}

// https://api.b7web.com/cinema/