import * as React from "react"
import './SideMenu.css'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {IconButton} from "@mui/material";

function SideMenu(){
    return <div className={"menu"} id={"myDIV"}>
        <h1>Today</h1>
        <IconButton className={"add"}><PlaylistAddIcon sx={{ fontSize: "45px" }}/></IconButton>
    </div>
}
export default SideMenu