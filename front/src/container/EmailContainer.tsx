import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import EmailCheck from '../components/SignUp/EmailCheck/EmailCheck';
const EmailContainer = () =>{
    const history = useHistory();
    const signUpSuccess = useCallback(()=>{history.push('/main')},[])
    return(
        <EmailCheck signUpSuccess={signUpSuccess}/>
    )
}
export default EmailContainer;