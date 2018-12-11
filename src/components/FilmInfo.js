import React,{Component} from 'react';

class FilmInfo extends Component{
  render(){
    return(
      <li>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.name}</a>
      </li>
    )
  }
}

export default FilmInfo;
