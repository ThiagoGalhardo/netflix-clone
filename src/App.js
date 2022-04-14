import "./App.css";

import React, { useEffect, useState } from "react";

import Tmdb from "./utils/Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {
  const [movieList, setMovielist] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista Total
      let list = await Tmdb.getHomeList();
  
      setMovielist(list);

      // Pegando o Featured
      let originals = list.filter(i=> i.slug === "originals");

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo)
    }


    loadAll();
  }, []);

useEffect(()=>{
  const scrollListener = ()=>{
    if (window.scrollY > 20) {
      setBlackHeader(true);      
    } else{
      setBlackHeader(false);
    }

  }
  window.addEventListener('scroll', scrollListener);

  return ()=>{
      window.removeEventListener('scroll', scrollListener);
  }

}, []);




  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }



      <section className="lists">
        {movieList.map((item, key) => (
          // <div>{item.title}</div>
          <MovieRow key={key}
          title= {item.title}
          items= {item.items} />
        ))}
      </section>

          <footer>
            Feito com <spam role="img" aria-label="coração">❤️</spam> por Thiago Galhardo<br/>
            Dados da API themoviedb.org
          </footer>

            {movieList.length <=0 && 

          <div className='loading'>
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
          </div>
          }
    </div>
  );
};
