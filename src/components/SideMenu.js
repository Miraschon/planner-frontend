import * as React from "react"
import './SideMenu.css'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {IconButton} from "@mui/material";

function SideMenu(props){
    let {isShow}= props
    let style='show'
    console.log('Style='+style)
    if(isShow) {
       // console.log('Style='+style)
        return <div className={style} id={"myDIV"}>
            <h1>Today</h1>
            <IconButton className={"add"}><PlaylistAddIcon sx={{fontSize: "45px"}}/></IconButton>
        </div>
    }else{

        style='hide'
        console.log('Style='+style)
        return <div className={style} id={"myDIV"}>
        </div>
    }

}
export default SideMenu
