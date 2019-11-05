import React,{Component} from 'react';
import {ListWarp,ListItem} from './../homeStyle'
import {connect} from "react-redux";
class List extends Component{
    render() {
        return(
            <div>
              <ListWarp>
                  {
                      this.props.lists.map((item,index)=>{
                          return (
                                  <ListItem key={index}>
                                  <img src={item.topicUrl} alt=""/>
                                  <span>{item.txt}</span>
                                  </ListItem>
                              )
                      })
                  }
              </ListWarp>
            </div>
        )
    }
}
const mapState =(state)=>({
    lists:state.home.lists
});

export default connect(mapState,null)(List)