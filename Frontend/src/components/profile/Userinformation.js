import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Userinformation = () => {
    const [formData ,setformData] = useState({email:"",password:"",username:"",firstName:"",lastName:"",linkedin:"",college_name:"",github:"",hobby:"",skill:"",avalibility:"",confirmpassword:"",createpassword:"",phone_no:"",});
    const [showpassword , setshowpassword] = useState(false);
    const [showpassword1 , setshowpassword1] = useState(false);
    const [accountType , setaccountType] = useState("student");
    const navigatee = useNavigate();
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
        const adata = {
            ...formData,
            accountType
        } 
        toast.success("Sign in");
        navigatee("/profilePerson");
        console.log(adata);
    }
  return (
    <div>
      <form onSubmit={submithandler}>
    <div className='flex gap-6'>
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
    <div className=''>
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
     <label className="text-white ggg">Phone Number
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="number"
                    value={formData.phone_no}
                    name="phone_no"
                    placeholder="Enter Email Address"
                    onChange={changeHandler}
                />
     </label>

     <label className="text-white ggg">College Name
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="text"
                    value={formData.college_name}
                    name="college_name"
                    placeholder="Enter Email college name"
                    onChange={changeHandler}
                />
     </label>
      <label className='ggg'>
        wanted to learn
      </label>
       <select className='text-white ggg inputt'>
            <option></option>
            <option>Technology</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>History</option>
            <option>Literature</option>
            <option>Finance</option>
            <option>Art and Creativity</option>
            <option>Cooking</option>
            <option>Others</option>
       </select>

       <label className="text-white ggg">Hobby
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="text"
                    value={formData.hobby}
                    name="hobby"
                    placeholder="Enter your Hobbies"
                    onChange={changeHandler}
                />
     </label>

       <label className='ggg'>
        you can teach
      </label>
       <select className='text-white ggg inputt'>
       <option></option>
            <option>Technology</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>History</option>
            <option>Literature</option>
            <option>Finance</option>
            <option>Art and Creativity</option>
            <option>Cooking</option>
            <option>Others</option>
       </select>
      
       <label className="text-white ggg">Skills
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="text"
                    value={formData.skill}
                    name="skill"
                    placeholder="Enter your skills"
                    onChange={changeHandler}
                />
     </label>
     <label className="text-white ggg">LinkedIn
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="text"
                    value={formData.linkedin}
                    name="linkedin"
                    placeholder="Enter your Linkedin Profile Link"
                    onChange={changeHandler}
                />
     </label>
     <label className="text-white ggg">Github
                <br></br>
                <input 
                required
                className="text-white inputt"
                    type="text"
                    value={formData.github}
                    name="github"
                    placeholder="Enter your github Profile Link"
                    onChange={changeHandler}
                />
     </label>
     <label className="text-white ggg">avalibility
                <br></br>
                <input
                required
                className="text-white inputt"
                    type="text"
                    value={formData.avalibility}
                    name="avalibility"
                    placeholder="Enter in which time you will avliable"
                    onChange={changeHandler}
                />
     </label>
     <div className='flex justify-center m-7 '>
        <button type='submit' className='relative  bg-[#EE6D4C] p-2 pl-10 pr-10 rounded-xl text-lg flex justify-center items-start'>Submit</button>
     </div>
    </div>
    </form>      
    </div>
  )
}

export default Userinformation