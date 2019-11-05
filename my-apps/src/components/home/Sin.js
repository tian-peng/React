import React,{Component} from 'react';
 import axios from 'axios'
import{SinWarp} from "./sinStyle";
class Sin extends Component{
       state = {
            message:'',
            id:this.props.match.params.id
        };

    render() {
      return(
          <div>

              <SinWarp>
                  <div>{this.state.message.title}</div>
                  <p>{this.state.message.body}</p>

              </SinWarp>
          </div>
      )
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts/'+this.state.id)
            .then((res)=>{
                this.setState({
                    message:res.data
                })

            }).catch(()=>{

                   console.log('失败')

        })
    }
}
export default Sin