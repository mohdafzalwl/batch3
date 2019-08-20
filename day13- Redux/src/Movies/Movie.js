import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Movie = (props)=> {
return(
  
    <React.Fragment>
      <Link to={`${props._id}`}>
      <Poster src={props.images.poster}/>
      </Link>
    </React.Fragment>
)
}

export default Movie

export const Poster = styled.img`
width: 200px
height: 250px
box-shadow : 0 0 35px black
`
