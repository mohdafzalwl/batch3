import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getMovies} from './movieaction'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import Movie from './Movie'
class MovieList extends Component {
   async componentDidMount(){
       if(!this.props.isloaded){
        this.props.getMovies()
    }
   }
    render() { 
        return ( 
            <React.Fragment>
               <MovieGrid>
               <i className="fas fa-camera"></i>
               <i class="fas fa-user-friends"></i>
       {this.props.movies.map((movie)=> <Movie key={movie._id} {...movie}/>)}
            </MovieGrid>
            
            </React.Fragment>
         );
    }
}
const mapStateToProps = state => ({
    movies :  state.movies.movies,
    isloaded: state.movies.isloaded
})
const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies     
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);

const MovieGrid = styled.div`
display : grid;
padding: 1rem;
grid-template-columns: repeat(4,1fr);
grid-row-gap : 1rem;
`
