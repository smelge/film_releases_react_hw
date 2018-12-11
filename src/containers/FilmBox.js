import React,{Component,Fragment} from 'react';
import FilmList from '../components/FilmList.js';
import UpcomingBtn from '../components/UpcomingBtn.js';

class FilmBox extends Component{
  render(){
    return(
      <Fragment>
        <FilmList/>
        <UpcomingBtn/>
      </Fragment>
    )
  }
}

export default FilmBox;
