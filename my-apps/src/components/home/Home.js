import React,{Component} from 'react';
import {HomeWarp,HomeLift,HomeRight} from './homeStyle'
import List from "./components/List";
import Sine from "./components/Sine";
import Scan from "./components/Scan";
import Topic from "./components/Topic";

import {connect} from "react-redux";
import axios from 'axios';

 class Home extends Component{
       render() {
          return(
          <div>
           <HomeWarp>
             <HomeLift>
                 <img src='//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848' alt=""/>
                 <List/>
                 <Sine/>
             </HomeLift>
            <HomeRight>
                <Scan/>
                <Topic/>
            </HomeRight>
           </HomeWarp>
          </div>
       )
    }
    componentDidMount() {
          axios.get('/data/getHomeList.json')
              .then((res)=>{
                  console.log(res.data);
                  const data = res.data.data;
                  const action = {
                      type:'init_home_data',
                      data
                  };
                    this.props.changeHomeData(action)
              })
    }
 }

 const mapDispatch =(dispatch)=>({
  changeHomeData(action){
      dispatch(action)
  }
 });

 export default connect(null,mapDispatch)(Home)