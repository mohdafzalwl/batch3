import React, { Component } from 'react';

class P0 extends Component {
state = { 
    selectedLanuage: 'Java'
 }
 updateLanguage=(lang)=>{
     this.setState({
        selectedLanuage : lang
     })
 }
    
    render() { 
        const languages = ["All" ,"Java", "JavaScript", "Python"]
        
        return ( 
            <div>
                {languages.map((lang ,index)=>(
                    <li key={index}
                      onClick={()=>this.updateLanguage(lang)}
                      style={ lang === this.state.selectedLanuage ? {color :'#d0021b'}: null}
                    >{lang}</li>
                ))}
                {this.state.selectedLanuage}
            </div>
         );
    }
}
 
export default P0;