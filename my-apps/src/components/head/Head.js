import React,{Component} from 'react';
import {HeadWarp,Logo,Nav,NavItem,SearchWarp,Search,SearchInfo} from "./headStyle";
import {connect} from 'react-redux';
import * as headActionCreates from './store/headActionCreates';
function showInfo(flag) {
    if(flag){
        return(
            <SearchInfo>
                <span>精品锅具</span>
                <span>厨房用品</span>
                <span>酒杯茶具</span>
            </SearchInfo>
        )
    }else {
        return null
    }
}
class Head extends Component{
    render(){
        return(
            <div>
                <HeadWarp>
                    <Logo/>
                    <Nav>
                        <NavItem href={'/'}>首页</NavItem>
                        <NavItem href={'/singo'}>详情页</NavItem>
                    </Nav>
                    {showInfo(this.props.flag)}
                    <SearchWarp>
                        <Search className={this.props.flag ? 'flag': ''}
                        onFocus={this.props.fun}
                        onBlur={this.props.inputBlur}/>
                        <span className='glyphicon glyphicon-search'></span>
                    </SearchWarp>
                </HeadWarp>
            </div>
        )
    }
}
const mapState =(state)=>({
    flag:state.head.flag
});
const mapDispatch =(dispatch)=>({
    fun(){

        dispatch(headActionCreates.handleFocus())
    },
    inputBlur(){

        dispatch(headActionCreates.handleBlur())
    }
});

export default connect(mapState,mapDispatch)(Head)
