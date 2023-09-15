import { useGoogleLogin } from "@react-oauth/google";
import { Button } from 'antd';
import MyCustomButton from './MyCustomButton';


const GoogleCustomButton = () => {

    const login = useGoogleLogin({
        onSuccess: res => console.log(res),
        onFailure: res => console.log(res),
        flow: 'implicit', //auth_code
    });

    return (
        <>
            <MyCustomButton onClick={() => login()}>
            </MyCustomButton>
        </>
    )
};

export default GoogleCustomButton;
