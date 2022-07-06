import {useState, useRef, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

import './App.scss'
import {Movie} from './types/Movie'
import {Card} from './Card'
import {Loading} from './Loading'
import {Header} from './Header'


export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  // const largura = useRef<any>(null)
  // const [teste, setTeste] = useState(1)

  // useEffect(()=> {
  //   let width = largura.current.offsetWidth;

  //   if(width < 480){
  //     setTeste(1)
  //   }else if(width > 481 && width < 768){
  //     setTeste(2)
  //   }else if(width > 769){
  //     setTeste(4)
  //   }
    
  // }, [largura])

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
    
    <div className='container' >
        <Header />
        <button className='button' onClick={loadMovies}>Carregar filmes</button>

        {loading && 
          <Loading />
        }

        <div className='cardbox' >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={3}
          modules={[Pagination]}
          className="mySwiper"
        >
          {movies.map((item, index) => (
            <SwiperSlide key={index}>
              <Card title={item.titulo} avatar={item.avatar} key={index}/>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </div>
  )
}

