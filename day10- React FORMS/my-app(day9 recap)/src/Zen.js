import React ,{Component} from 'react';
import axios from 'axios'
class ZEN extends Component {
    constructor(props){
        super(props)
        this.state={
            quote : "",
            isloaded: false
        }
    }
     componentDidMount(){
        //get call 
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
           
            setTimeout(()=>{
                this.setState({
                    quote: response.data.title,
                    isloaded : true
                })
            }, 3000)
            console.log(response.data)
         
        })
    }
    componentDidUpdate(prevProps, PrevState){
        console.log('previuous props',prevProps)
        console.log('previous state',PrevState)
      }

render() { 
    const {isloaded, quote} = this.state
        return (  
            <div>
                {isloaded ? (


                    <h1>{quote}</h1>
                    
                ) :(
                    <h1>loading</h1>
                )}
               
                
            </div>
         );
    }
}
 
export default ZEN;