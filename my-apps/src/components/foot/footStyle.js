import styled from "styled-components";
import logo from './../../static/logo.jpg'
export const FootWarp = styled.div`
width: 100%;
height: 200px;
background: #ccc;
float: right;
margin-top: 20px;
`;
export const FootItem = styled.div`
width: 450px;
height: 200px;
float: left;
`;
export const Logo = styled.a`
height: 50px;
width: 100px;
display: block;
background: url("${logo}");
background-size: contain;
margin-left: 130px;
float: left;
margin-top: 10px;
`;
export const Item = styled.p`
width: 280px;
height: 120px;
margin-top: 77px;
margin-left: 130px;
`;
export const FootErr = styled.div`
width: 350px;
height: 200px;
float: left;
padding: 40px 23px;

img{
width: 130px;
height:110px;
float: left;
margin-left: 15px;
}
`;
export const FootSan = styled.div`
width: 500px;
height: 200px;
float: left;
padding-top: 26px;
`;
export const SanItem = styled.div`
width: 450px;
float: left;
text-align: center;
p{
width: 30%;
float: left;

}
`;