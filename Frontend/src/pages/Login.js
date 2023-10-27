import Templets from "../components/signup/Templates";
import loginImg from "../assets/images/login.png";
function Login({setIsLogedIn}){
    return(
        <div className="">
            <Templets
            title="Welcome Back"
            dec1="Build skills for today, tomorrow, and beyond."
            dec2="Education to future-proof your career."
            image={loginImg}
            formType="login"
            setIsLogedIn={setIsLogedIn}
            />
        </div>
    )
}
export default Login