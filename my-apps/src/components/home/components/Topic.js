import React,{Component} from 'react';
import {TopicWarp,TopicItem,TopicFoot} from './../homeStyle'
import {connect} from "react-redux";
class Topic extends Component{
    render() {
        return(
            <div>
              <TopicWarp>
                  <TopicItem>
                      <img src='//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848' alt=""/>
                      <img src='//asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848' alt=""/>
                  </TopicItem>

                      {
                          this.props.topicList.map((item,index)=>{
                              return(
                                  <TopicFoot key={index}>
                                  <li>{item.txt}</li>
                                  </TopicFoot>
                              )
                          })
                      }

              </TopicWarp>
            </div>
        )
    }
}
const mapState =(state)=>({
    topicList:state.home.topicList
});
export default connect(mapState,null)(Topic)