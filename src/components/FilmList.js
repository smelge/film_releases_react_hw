import React,{Component} from 'react';
import FilmInfo from './FilmInfo.js';

class FilmList extends Component{
  render(){
    const filmData = this.props.data.map((film)=>{
      return <FilmInfo
        key={film.id}
        name={film.name}
        url={film.url}
      />
    })


    return(
      <div className="film-list">
        <ul>
          {filmData}
        </ul>
      </div>
    )
  }
}

export default FilmList;
