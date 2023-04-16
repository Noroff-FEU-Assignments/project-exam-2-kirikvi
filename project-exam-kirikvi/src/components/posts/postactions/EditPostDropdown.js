import options from "../../../icons/options.png";
//import DropdownItem from "./DropdownItem";
import React, {useEffect, useRef, useState } from "react";
import UpdatePost from "./UpdatePost";


export default function EditPostDropdown() {

    const [open, setOpen ] = useState(false);

    
    //Lets the user close the dropdown update/delete form when clicking anywhere outside the form.
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

    return (
        <div>
            <div ref={menuRef}>
                <div className="menuTrigger" onClick={()=>{setOpen(!open)}}>
                    <img src={options} alt="options"></img>
                </div>

                <div className={`dropdownMenu ${open? "active" : "inactive"}`} >
                    <ul>
                        <UpdatePost />
                    </ul>
                </div>
            </div>
        </div>
    )
}