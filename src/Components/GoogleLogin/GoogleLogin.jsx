import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
const GoogleLogin = () => {
    const { GoogleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        GoogleLogin().then(() => {

            navigate("/")
        })
    }
    return (
        <div>
            <div className="divider divider-success">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full"><FcGoogle className="size-9" />Google Login</button>

        </div>
    );
};

export default GoogleLogin;