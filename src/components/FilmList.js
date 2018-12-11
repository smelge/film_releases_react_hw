import React,{Component} from 'react';
import FilmInfo from './FilmInfo.js';

class FilmList extends Component{
  render(){
    return(
      <ul>
        <FilmInfo/>
        <FilmInfo/>
      </ul>
    )
  }
}

export default FilmList;
