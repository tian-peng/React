import styled from 'styled-components';
import logo from './../../static/logo.jpg'
export const HeadWarp = styled.div`
height: 60px;
background: #ccc;
`;
export const Logo = styled.a`
height: 60px;
width: 100px;
display: block;
background: url("${logo}");
background-size: contain;
margin-left: 60px;
float: left;
`;
export const Nav = styled.div`
width: 300px;
height: 60px;
margin-left: 90px;
float: left;
`;
export const NavItem = styled.a.attrs({href:props=>props.href})`
margin-left: 40px;
font-size: 26px;
line-height: 60px;
`;
export const SearchWarp = styled.div`
height: 60px;
float: right;
line-height: 58px;
position: relative;
margin-right: 100px;
span{
position: absolute;
right: 20px;
top: 23px;
}
`;
export const Search = styled.input.attrs({placeholder:'请输入内容'})`
width: 180px;
height: 33px;
border: none;
outline: none;
border-radius: 20px;
box-sizing: border-box;
padding-left: 20px;
transition: 1s;
&.flag{
 width: 230px;
 transition: 1s;
}
`;
export const SearchInfo = styled.div`
width: 300px;
height: 60px;
float: left;
span{
font-size: 16px;
margin-left: 30px;
line-height: 60px;
}
`;