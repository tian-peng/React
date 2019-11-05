import React,{Component} from 'react';
import { Carousel } from 'antd';
import {SingoWarp,SingoItem} from "./singoStyle";
class Singo extends Component{
    render() {
        return(
            <div>
                <SingoItem>青竹良品原创生活类原创电商品牌</SingoItem>
                <SingoWarp>

                    <Carousel autoplay>
                        <div>
                          <img src='//asset.ibanquan.com/s/30611/727/index_global3_pic_1?v=1568268246_1572860962' alt=""/>
                        </div>
                        <div>
                            <img src='//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572860962' alt=""/>
                        </div>
                        <div>
                           <img src='//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572860962' alt=""/>
                        </div>
                        <div>
                            <img src='http://asset.ibanquan.com/image/5880813fb1b9571423000015/s_w330h330.png?v=1484816703' alt=""/>
                        </div>
                    </Carousel>
                </SingoWarp>
            </div>
        )
    }
}
export default Singo