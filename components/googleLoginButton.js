import {GoogleLogin} from "@react-oauth/google";

const GoogleLoginButton = () => {
    
    return (
        <>            
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);                        
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}                    
                />            
        </>
    );
};

export default GoogleLoginButton;
