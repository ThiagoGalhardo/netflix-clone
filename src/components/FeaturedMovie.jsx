import React from 'react';
import "./FeaturedMovie.css"

export default ({item})=>{


  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);    
  }

  // Encurtando descrição e resolvendo erro de filmes sem descrição
  let description = item.overview;
  let descriptionLength = "";

  if (description !== undefined ) {
    descriptionLength = description.length;
    if (descriptionLength > 200) {
      description = description.substring(0, 200)+'...';
    }    
  }


return(
<section className='featured' style={{
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(https://image.tmdb.org./t/p/original${item.backdrop_path})`
}}>
  <div className='featured--vertical'>
    <div className='featured--horizontal'>
      <div className='featured--name'> {item.original_name} </div>
      <div className="featured--info">
      <div className="featured--points">{item.vote_average} pontos</div>
      <div className="featured--year">{firstDate.getFullYear()}</div>
      {/* Verificando se possui mais de uma temporada, para adicionar o S no final. */}
      <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
      </div>
      <div className="featured--description">{description}</div>

      <div className='featured--buttons'>
        <a className='featured--watch-button' href={`/watch/${item.id}`}>► Assistir</a>
        <a className='featured--list-button' href={`{/list/add${item.id}}`}>+ Minha lista</a>
      </div>
      <div className="featured--genres"><strong>Gênero:</strong> {genres.join(', ')}</div>

    </div>
  </div>
</section>
    );

}