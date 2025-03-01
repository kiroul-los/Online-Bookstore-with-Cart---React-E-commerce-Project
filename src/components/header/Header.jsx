import "./header.css";
import HeaderTop from "./HeaderTop.jsx";
import HeaderMiddle from "./HeaderMiddle.jsx";
import {useState} from "react";
import Navbar from "./Navbar.jsx";

const header=()=>{
    const [toggle,setToggle]=useState(false);
    return (
        <header className={"header"}>
            <HeaderTop setToggle={setToggle} toggle={toggle}/>
           <HeaderMiddle/>
            <Navbar toggle={toggle} setToggle={setToggle}/>
        </header>
    );
}

export default header;