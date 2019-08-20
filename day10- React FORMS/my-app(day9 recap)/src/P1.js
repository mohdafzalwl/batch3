import React, { Component } from 'react';
import fetchPopularRepos from './Api'
import {Grid} from '@material-ui/core/';


function SelectLanguage( {selectedLanuage,onSelect}){
     const languages = ["All" ,"Java", "JavaScript", "Python"]

     return(
        <Grid container justify="space-evenly">
{languages.map((lang ,index)=>(
                    <Grid xs item key={index}
                      onClick={()=>onSelect(lang)}
                      style={ lang === selectedLanuage ? {color :'#d0021b'}: null}
                    >{lang}</Grid>
                ))}
        </Grid>
    )
}
function RepoGrid(props){
    const {repos} = props
    return(
        <Grid 
        
        direction="row"
        justify="space-evenly"
        >
            {repos.map(({name,owner})=>(
                <Grid xs item key={name} >
                    <h1>{name}</h1>
                    <img src={owner.avatar_url} style={{borderRadius:"50px", height:"350px", width:"350px"}} />

                    </Grid>
            ))}
        </Grid>
    )
}
//private CLASS FIELDS - 16.8
class P1 extends Component {
state = { 
    selectedLanuage: 'Java',
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
            <div>
               <SelectLanguage
                selectedLanuage={selectedLanuage}
                onSelect = {this.updateLanguage}
               />
             {!repos ? <h1>loading</h1>: <RepoGrid repos={repos}/> }
            </div>
         );
    }
}
 
export default P1;