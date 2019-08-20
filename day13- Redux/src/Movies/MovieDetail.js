import React, { Component } from 'react';
import styled from 'styled-components'
import {getMovie,resetMovie} from './movieaction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Poster} from './Movie'
class MovieDetail extends Component {
   async componentDidMount(){
     const getMovieId = this.props.match.params.id
      this.props.getMovie(getMovieId)
   }
   componentWillUnmount(){
     this.props.resetMovie()
   }
    render() { 
      if(!this.props.movie._id) return null
         const {movie} = this.props
        return ( 
            <div>
          <MovieWrapper src={movie.images.fanart}>
                  <MovieInfo>
                    <Poster  src={movie.images.poster}/>
                  <div>
                    <h2>{movie.title}</h2>
                    <h3>{movie.year}</h3>
                   <p>{movie.synopsis}</p>
                  </div>
                  </MovieInfo>
         </MovieWrapper>
            </div>
         );
    }
}
const mapStateToProps = state => ({
  movie:  state.movies.movie
})
const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie,
  resetMovie
}, dispatch)
 export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;
const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
