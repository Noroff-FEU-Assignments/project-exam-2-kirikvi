import options from "../../../icons/options.png";
import React, {useEffect, useRef, useState } from "react";
import UploadProfileMedia from "./UploadProfileMedia";

export default function UploadProfileMediaDropdown() {

    const [open, setOpen ] = useState(false);

    
    //Lets the user close the dropdown menu when clicking anywhere outside the form.
    let menuRef = useRef();
    
    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    //Display the dropdown menu
    return (
        <div>
            <div ref={menuRef}>
                <div className="menuTrigger" onClick={()=>{setOpen(!open)}}>
                    <img src={options} alt="options"></img>
                </div>

                <div className={`dropdownMenu ${open? "active" : "inactive"}`} >
                    <ul>
                        <UploadProfileMedia />
                    </ul>
                </div>
            </div>
        </div>
    )
}