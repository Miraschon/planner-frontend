import * as React from "react"
import './ListArea.css'
import {IconButton} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useState} from "react";

/* function myFunction() {
    const x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} */

function ListArea() {
    const [position, setPosition] = useState('list')

    function changePosition(){
        setPosition('cover')
    }


    return <div className={position} id={"listArea"}>
        <p>Today</p>
        <IconButton className={"close"} onClick={changePosition}><ArrowBackIosIcon sx={{ fontSize: "40px" }} style={{ color: 'white' }}/></IconButton>
    </div>
}

export default ListArea