import options from "../../../icons/options.png";
//import DropdownItem from "./DropdownItem";
import React, {useState } from "react";
import UpdatePost from "./UpdatePost";


export default function EditPostDropdown() {

    const [open, setOpen ] = useState(false);
    return (
        <div>
            <div>
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