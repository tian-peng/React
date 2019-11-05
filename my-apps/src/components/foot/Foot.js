import React,{Component} from 'react';
import {FootWarp,FootItem,Logo,FootErr,FootSan,Item,SanItem} from './footStyle'
import {connect} from "react-redux";
import axios from "axios";


class Foot extends Component{
    render() {
        return(
            <div>
              <FootWarp>
                <FootItem>
                    <Logo/>
                    <Item>使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。
                        用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，
                        从中感受用餐的乐趣，
                        同时还可自然而然地了解日本饮食文化</Item>
                </FootItem>
                  <FootErr>
                      <img src='//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848' alt=""/>
                      <img src='//asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848' alt=""/>
                  </FootErr>
                  <FootSan>
                      {
                          this.props.footList.map((item,index)=>{
                              return(
                                  <SanItem key={index}>
                                      <p>{item.title}</p>
                                      <p>{item.txt}</p>
                                      <p>{item.dosc}</p>
                                  </SanItem>

                              )
                          })
                      }
                  </FootSan>
              </FootWarp>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                console.log(res.data);
                const data = res.data.data;
                const action = {
                    type:'init_foot_data',
                    data
                };
                this.props.changeFootData(action)
            })
    }
}
const mapState =(state)=>({
    footList:state.foot.footList
});
const mapDispatch =(dispatch)=>({
    changeFootData(action){
        dispatch(action)
    }
});
export default connect(mapState,mapDispatch)(Foot)