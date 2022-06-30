import * as React from "react"
import './ListArea.css'
import {IconButton} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ListArea() {
    return <div className={"list"}>
        <p>Today</p>
        <IconButton className={"close"}><ArrowBackIosIcon sx={{ fontSize: "40px" }}/></IconButton>
    </div>
}

export default ListArea