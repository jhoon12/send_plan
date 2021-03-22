import styled from 'styled-components';
import  MainImg from '../../assets/MainImg.png'
export const Body = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
`

export const MainImgBox = styled.div`
    width:70%;
    height:100%;
    background-image: url(${MainImg}); 
    background-repeat: no-repeat;
    background-size: cover;
`



export const LoginTitle = styled.div`
    font-family: 'Chango', cursive;
    font-weight:bold;
    font-size: 80px;
    /* text-align:center; */
    margin: 0 auto;
    margin-top:20px;
    color: #8ec5fc
`
