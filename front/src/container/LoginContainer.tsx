import React, {useCallback} from 'react';
import Login from '../components/Login/Login';
import {useHistory} from 'react-router-dom';
const LoginContainer = () => {
    const history = useHistory();
    const goToMain = useCallback(() => {
        history.push('/main');
    },[])
    const goToSignUp = useCallback(() => {
        history.push('/signUp');
    },[])
    return(
        <Login goToSignUp ={goToSignUp} goToMain={goToMain} />
    )
}
export default LoginContainer;