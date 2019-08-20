import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import fetchPopularRepos from './Api'
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function SelectLanguage( {selectedLanuage,onSelect}){
    const languages = ["All" ,"Java", "JavaScript", "Python"]

    return(
       
       <Grid container  direction="row"
       justify="space-evenly">
          
{languages.map((lang ,index)=>(
                
                   <Grid key={index}
                     onClick={()=>onSelect(lang)}
                     style={ lang === selectedLanuage ? {color :'#d0021b'}: null}
                   >{lang}
                      </Grid>
                 
               ))}
               
       </Grid>
  
   )
}

SelectLanguage.propTypes = {
    selectedLanuage: PropTypes.string,
    onSelect: PropTypes.func.isRequired
}
function RepoGrid(props){
    const {repos} = props
    return(
        <Grid container  direction="row"
        justify="space-between">
            {repos.map(({name,owner})=>(
                <Grid item key={name} >
                    <h1>{name}</h1>
                    <img src={owner.avatar_url} style={{borderRadius:"50%",width:"350px", height:"350px"}}/>

                    </Grid>
            ))}
        </Grid>
    )
}
RepoGrid.propTypes = {
    repos : PropTypes.array.isRequired
}

class P2 extends Component {
    state = { 
        selectedLanuage: '',
        repos :null
     }
     componentDidMount(){
         this.updateLanguage(this.state.selectedLanuage)
     }
     updateLanguage=(lang)=>{
         this.setState({
                selectedLanuage : lang,
                repos : null
         } )
         fetchPopularRepos(lang)
        .then((data)=> {
            this.setState({
                repos: data
            })
        })
    
     }
     render() { 
         const {selectedLanuage,repos} = this.state
              return ( 
                <React.Fragment>
                   <SelectLanguage
                    selectedLanuage={selectedLanuage}
                    onSelect = {this.updateLanguage}
                   />
                 {!repos ? <h1>loading</h1>: <RepoGrid repos={repos}/> }
                </React.Fragment>
             );
        }
    }
     
    export default P2;