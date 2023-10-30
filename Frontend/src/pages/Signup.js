// import { useState } from "react";
import Templets from "../components/signup/Templates";
import signupImg from "../assets/images/signup.png";
function SignUp({setIsLogedIn}){
    return(
        <div className="text-white">
            <Templets
            title="Join the millions learning to code with skillTrade for free"
            dec1="Build skills for today, tomorrow, and beyond."
            dec2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setIsLogedIn={setIsLogedIn}
            />
        </div>
    )
}
export default SignUp;