import styled from 'styled-components';


export const Input = styled.input`
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
  margin: 0 auto;
  margin-bottom: 10%;
`;
export const BtnBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpBtn = styled.button`
  background-color: #8ec5fc;
  width: 50%;
  height: 40%;
  border-radius: 2rem;
  outline: none;
  border: solid 0px;
`;
