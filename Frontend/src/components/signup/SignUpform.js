import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignUpform({setIsLogedIn}){
    const [formData ,setformData] = useState({email:"",password:"",firstName:"",lastName:"",confirmpassword:"",createpassword:""});
    const [showpassword , setshowpassword] = useState(false);
    const [showpassword1 , setshowpassword1] = useState(false);
    const [accountType , setaccountType] = useState("student");
    const navigate = useNavigate();
    function changeHandler (event){
        setformData(prevdata =>{
            return{
                ...prevdata,
                [event.target.name]: event.target.value
        }
        });
    }
    function submithandler(event){
        event.preventDefault();
        if(formData.confirmpassword !== formData.createpassword)
        {
            toast.error("Password do not match");
            return;
        }
        setIsLogedIn(true);
        
        const adata = {
            ...formData,
            accountType
        } 
        toast.success("Sign in");
        navigate("/dashbord");
        console.log(adata);
    }
    return(
        <div className="text-white signff">
            <form onSubmit={submithandler}>
            <div className="selections">
                <button onClick={()=>setaccountType("student")} className={`${accountType === "student"? "same" :"notsame"}`}>Student</button>
                <button onClick={()=>setaccountType("instructor")} className={`${accountType === "instructor"? "same" :"notsame"}`}>Instructor</button>
            </div>
            
            <br/>
        <div className="text-white names">
            <div>
        <label className="text-white ggg">First Name</label>
        <br/>
        
        <input 
        required
        
        className="text-white inputt"
        type = "text"
        name = "firstName"
        onChange={changeHandler}
        value ={formData.firstName}
        placeholder = "first name"
        />
      </div>
       <div>
        <label className="text-white ggg">Last Name</label>

      <br/>
      <input 
      required
      className="text-white inputt inn"
        type = "text"
        name = "lastName"
        onChange={changeHandler}
        value ={formData.lastName}
        placeholder = "Last name"
      />
      <br/>
      </div>
      </div>
      <label className="text-white ggg">Email address
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="text"
                    value={formData.email}
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={changeHandler}
                />
        </label>
        <div className="text-white passwordss">
            <div>
            <label className="text-white ggg">create password
                <input 
                required
                className="text-white inputt iii"
                    type={showpassword1 ? ("text") : ("password")}
                    name="createpassword"
                    placeholder="Enter password"
                    onChange={changeHandler}
                    
                />
                <span className="watch" onClick={()=>{setshowpassword1((prev) => !prev);}}>
                    {(showpassword1 === true) ?
                    (<AiOutlineEye />):
                    (<AiOutlineEyeInvisible/>)
                    }
                </span>
                </label>
            </div>
            <div>
            <label className="text-white ggg">confirm password</label>
            
                <input 
                required
                className="text-white inputt iii"  
                    type={showpassword ? ("text") : ("password")}
                    name="confirmpassword"
                    placeholder="Enter password"
                    onChange={changeHandler}
                    
                />
                <span className="watch" onClick={()=>{setshowpassword((prevs) => !prevs);}}>
                    {(showpassword === true) ?
                    (<AiOutlineEye />):
                    (<AiOutlineEyeInvisible/>)
                    }
                </span>
            </div>
        </div>
        <button className="text-white signnnn">Create Account</button>
        </form>
    </div>
    )
}
export default SignUpform;