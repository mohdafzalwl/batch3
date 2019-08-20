import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import Zen from './Zen'
import GithubUser from './Githubuser'
import P0 from './P0';
import P1 from './P1';
import P2 from './P2'
import ButtonAppBar from './Landing/AppBar'
import ImgMediaCard from './Landing/CardComponent'
import {Grid} from '@material-ui/core/';
import CF from './CF'
import UF from './UF'
import Shop from './Shop'
import Z from './Z'
class App extends React.Component{
 

  loginHandler=()=>{
    alert("from app .js")
  }

  render(){
    return(
      <React.Fragment>
      {/* <P0/> */}
      {/* <ButtonAppBar/>
      <Grid container>
      <Grid item xs>  <ImgMediaCard/></Grid>
      <Grid item xs>  <ImgMediaCard/></Grid>
      <Grid item xs>  <ImgMediaCard/></Grid>
     
      </Grid> */}
      {/* <CF/> */}
      {/* <UF/> */}
      {/* <Shop loginHandler={this.loginHandler}/>
      <P2/> */}
     <Z/>
      </React.Fragment>
    )
  }
}

export default App;

{/* <Timer/> */}
{/* <GithubUser username={"mohdafzalwl"}/>
<GithubUser username={"tom"}/> */}

//invalidating timers
//cancelling network request
//remove event handlers from dom 
//cleaning up subscriptions 
//there will be no rendering after this method 