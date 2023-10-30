import { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye ,AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
function Loginform({setIsLogedIn}){
    let navigate = useNavigate();
    const [formData ,setformData] = useState({email:"",password:""});
    const [showpassword , setshowpassword] = useState(false);
    function changehandler (event){
        setformData(prevdata =>{
            return{
                ...prevdata,
                [event.target.name]: event.target.value
        }
        });
    }
    function submithandler(event){
        
        event.preventDefault();
        
        setIsLogedIn(true);
        toast.success("logged in");
        navigate("/profilePerson");
        console.log(formData);
    }
    return(
        <div className="text-white signform">
            <form onSubmit={submithandler}>
                <label className="email">Email address</label>
                <br></br>
                <input 
                    className="inputt"
                    required
                    type="text"
                    value={formData.email}
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={changehandler}
                />
                
                <br/>
                <label className="email">Password
                <br></br>
                <input 
                required
                className="inputt"
                    type={showpassword ? ("text") : ("password")}
                    name="password"
                    placeholder="Enter password"
                    onChange={changehandler}
                    
                />
                <span className="watch" onClick={()=>{setshowpassword((prev) => !prev);}}>
                    {(showpassword === true) ?
                    (<AiOutlineEye />):
                    (<AiOutlineEyeInvisible/>)
                    }
                </span>
                <Link to="#">
                    <p className="forget">
                        Forgot Password
                    </p>
                </Link>
                </label>
                
                <br/>
                <br/>
                <button className="signnnn">Sign in</button>
            </form>
        </div>
    )
}
export default Loginform;