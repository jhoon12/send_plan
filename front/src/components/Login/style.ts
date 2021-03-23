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


export const LoginBox = styled.div`
 
        text-align:center;
    margin-top:20px;
    flex: 1;


`
export const LoginTitle = styled.div`
    font-family: 'Chango', cursive;
    font-weight:bold;
    font-size: 80px;
    color: #8ec5fc;
    margin-bottom:80px;

`
export const LoginInput = styled.input`
    width:80%;
    height:50px;
    margin-top:30px;
    border: solid 0.1rem #8ec5fc;

    outline:none;

`
export const LoginBtn = styled.button`
    margin-top:100px;
    background-color: #8ec5fc;
    width:80%;
    height:70px;
    border:solid;
    border-color: #8ec5fc;
    outline:none;
    border-radius:2rem;
`
export const GoToSignUp = styled.div`
    color:#8ec5fc;
    display:flex;
    justify-content:flex-end;
    margin-top:10px;
    font-size:7px;
    margin-right:50px;
    cursor: pointer;
`



