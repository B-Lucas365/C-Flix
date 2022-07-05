import {useState} from 'react'
import './App.scss'
import {Movie} from './types/Movie'
import {Card} from './Card'
import {Loading} from './Loading'


export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  const loadMovies = async() => {
    setLoading(true)
    const res = await fetch('https://api.b7web.com.br/cinema/')
    const json = await res.json()
    setLoading(false)
    json.map((item: Movie, index: number) => {
      if(item.titulo.indexOf('Escape Route') < 0 ){
        setMovies(currentList => [...currentList,item])
      }
    })
  }

  return (
    <div className='container'>
        <button className='button' onClick={loadMovies}>Carregar filmes</button>

        {loading && 
          <Loading />
        }

        <div className='cardbox'>
          {movies.map((item, index) => (
            <Card title={item.titulo} avatar={item.avatar} key={index}/>
          ))}
        </div>
    </div>
  )
}

