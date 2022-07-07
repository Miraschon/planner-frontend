import {IconButton} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as React from "react";

function OpenCloseButton(props){
    let {position, onChange}= props
    if(position==='list'){
        return <IconButton className={"close"} onClick={onChange}>
            <ArrowBackIosIcon sx={{ fontSize: "40px" }} style={{ color: 'white' }}/>
        </IconButton>
    }else{
        return <IconButton className={"close"} onClick={onChange}>
            <ArrowForwardIosIcon sx={{ fontSize: "40px" }} style={{ color: 'white' }}/>
        </IconButton>
    }

}

export default OpenCloseButton