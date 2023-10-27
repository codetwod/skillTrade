import Loginform from "../signup/Loginform";
import SignUpform from "../signup/SignUpform";
import frameimage from '../signup/images/frame.png';
import google from '../signup/images/google.png';
const Templets = ({title,dec1,dec2,image,formtype,setIsLogedIn}) => {
    return(
        <div className="loginsignpage">
            <div className="info">
                <h1>{title}</h1>
                <p className="dec">
                    <span>{dec1}</span>
                    <br/>
                    <span className="bluee">{dec2}</span>
                </p>
                {formtype === "signup" ?
                (<SignUpform setIsLogedIn={setIsLogedIn}/>):
                (<Loginform setIsLogedIn={setIsLogedIn}/>)
                }
                <div className="orhandel">
                    <div className="line"></div>
                    <span>or</span>
                    <div className="line"></div>
                </div>
                <button className="text-white signlog"><img className=" googleimage" alt="imahe" src={google}></img>Sign up with Google</button>
            </div>
            <div className="imagess ">
                    <img className="frameimage" src={frameimage}
                     alt="rishi"
                     width={558}
                     height={504}
                     loading="lazy"
                    />
                    <img className="mainimage" src={image}
                     alt="rishi"
                     width={558}
                     height={504}
                     loading="lazy"
                    />
                </div>
            
        </div>
    )
}
export default Templets;