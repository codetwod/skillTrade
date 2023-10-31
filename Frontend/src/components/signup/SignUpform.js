import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignUpform({setIsLogedIn}){
    const [formData ,setformData] = useState({email:"",password:"",firstName:"",lastName:"",username:""});
    const [showpassword , setshowpassword] = useState(false);
    const [showpassword1 , setshowpassword1] = useState(false);

    const navigate = useNavigate();
    function changeHandler (event){
        setformData(prevdata =>{
            return{
                ...prevdata,
                [event.target.name]: event.target.value
        }
        });
    }
    async function submithandler(event){
      console.log('handler called');
        event.preventDefault();
        // if(formData.confirmpassword !== formData.createpassword)
        // {
        //     toast.error("Password do not match");
        //     return;
        // }

        setIsLogedIn(true);
        
        const adata = {
            ...formData
        } 
   
        console.log(adata);
        try {
            // const path=process.env.SERVER;
            console.log('inside try block');
            const response = await fetch(`http://localhost:4000/api/v1/signup`, {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            console.log('post method done');
            if (response.ok) {
              const data = await response.json();
              console.log(data); // You can handle the response data here
              toast.success("Sign in");
              navigate("/userinfo");
            } else {
              console.error('Failed to sign up');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }

    }
    return(
        <div className="text-white signff">
            <form onSubmit={submithandler}>
            {/* <div className="selections">
                <button onClick={()=>setaccountType("student")} className={`${accountType === "student"? "same" :"notsame"}`}>Student</button>
                <button onClick={()=>setaccountType("instructor")} className={`${accountType === "instructor"? "same" :"notsame"}`}>Instructor</button>
            </div> */}
            
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
        <div>
        <label className="text-white ggg">UserName</label>

      <br/>
      <input 
      required
      className="text-white inputt inn"
        type = "text"
        name = "username"
        onChange={changeHandler}
        value ={formData.username}
        placeholder = "Username"
      />
      <br/>
      </div>
        <div className="text-white passwordss">
            
            <div>
            <label className="text-white ggg">confirm password</label>
            
                <input 
                required
                className="text-white inputt iii"  
                    type={showpassword ? ("text") : ("password")}
                    name="password"
                    placeholder="Enter password"
                    onChange={changeHandler}
                    value={formData.password}
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