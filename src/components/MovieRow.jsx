import React, {useState} from 'react';
import "./MovieRow.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default({title, items}) =>{
  const [scrollX, setScrollX] = useState(0);


  const handleLeftArrow = ()=>{
    let x = scrollX + Math.round(window.innerWidth / 2); //pegando a tela do usuário e dividindo por 2(metade da tela)
    if (x >0) {
    x =0;      
    }
    setScrollX(x);
  }

  const handleRightArrow = ()=>{
   let x = scrollX - Math.round(window.innerWidth / 2);
   // Aqui temos um calculo para pegar o tamanho da tela do usuário verificar se é maior que x
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) {
      x=(window.innerWidth - listW) - 60;   // menos 60 dos paddings dos arrows 
    }
   setScrollX(x);
  }



  return(
    <div className='movie-row'>
      <h2>{title}</h2>
      <div className='movie-row--left' onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </div>

      <div className='movie-row--right' onClick={handleRightArrow}>
      <NavigateNextIcon style={{fontSize: 50}}/>
      </div>




      <div className='movie-row--listarea'>
        <div className="movie-row--list" style={{marginLeft: scrollX,
        width: items.results.length * 150 }}>
        {items.results.length > 0 && items.results.map( (item, key) =>(                  
                  <div key={key} className="movie-row-item">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>                
        ))}
        </div>  
      </div>
    </div>
  );

}