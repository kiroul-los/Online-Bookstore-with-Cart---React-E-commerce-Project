import {Link} from "react-router-dom";
import "./forms.css";
import {use, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{

    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [showPassword,setShowPassword]=useState(false);

    const formSubmitHandler=(e)=>{
       e.preventDefault()

        if(email.trim()==="")return toast.error("Email is Required");
        if (password.trim()==="")return toast.error("Password is Required");
    };

    const showPasswordHandler=()=>{
        setShowPassword(prev=>!prev);
    }

    return (
        <div className={"form-wrapper"}>
            <ToastContainer theme={"colored"} />
            <h1 className={"form-title"}> Log in to Your Account</h1>
            <form onSubmit={formSubmitHandler} className={"form"}>
                <div className={"input-wrapper"}>
                <input value={email} onChange={e=>setEmail(e.target.value)} type={"email"} placeholder={"Email"} />
                <input value={password} onChange={e=>setPassword(e.target.value)} type={showPassword?"text":"password"} placeholder={"Password"} />
                {showPassword?(<i onClick={showPasswordHandler} className={"bi bi-eye-slash-fill show-password-icon"}></i>
                ):( <i onClick={showPasswordHandler} className={"bi bi-eye-fill show-password-icon"}></i>
                )}
                </div>

                <button className={"form-btn"}>Login</button>
            </form>
            <div className={"form-footer"}>
                Don't Have an Account{" "}
                <Link to={"/register"} className={"form-link"}>Register</Link>
            </div>
        </div>
    )
}

export default Login;