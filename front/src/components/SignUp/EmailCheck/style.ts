import styled from 'styled-components'

export const Discrip = styled.div`
    width:100%;
    margin:0 auto;
    font-size:25px;
    color: #909090;
`

export const Input = styled.input`
  margin: 0 auto;
  margin-top:70px;
  border: none;
  display: block;
  border-bottom: 1px solid #909090;
  height: 10%;
  width: 100%;
  font-size: 21px;
  outline: none;
  padding: 4px;
  color: #909090;
  &::placeholder {
    color: #909090;
  }
`;
export const BtnBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpBtn = styled.button`
margin:0 auto;
    margin-top:100px;
  background-color: #8ec5fc;
  width: 50%;
  height: 70%;
  border-radius: 2rem;
  outline: none;
  border: solid 0px;
`;