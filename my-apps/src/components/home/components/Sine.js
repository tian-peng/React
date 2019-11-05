import React,{Component} from 'react';
import {SineWarp,SineItem} from './../homeStyle'
import {connect} from "react-redux";
import {Link}from "react-router-dom"

class Sine extends Component{
    render() {
        return(
            <div>
            <SineWarp>
                {
                    this.props.sineList.map((item,index)=>{
                        return(
                            <SineItem key={index}>
                                <img src={item.imgUrl} alt=""/>
                                <div>
                                    <Link to={`/sin/${item.id}`}>
                                        <h3>{item.txt}</h3>
                                    </Link>

                                    <p>{item.desc}</p>
                                </div>
                            </SineItem>
                        )
                    })
                }
            </SineWarp>
            </div>
        )
    }
}
const mapState =(state)=>({
    sineList:state.home.sineList
});
export default connect(mapState,null)(Sine)