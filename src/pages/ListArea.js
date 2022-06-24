import * as React from "react"
import './ListArea.css'
import {IconButton} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ListArea(){
    return <div className={"list"}>
        <p>Today</p>
<div className={"normal"}>Item1</div>
        <p/>
        <div className={"hover"}>Item2</div>
        <p/>
        <div className={"complete"}>Item3</div>
        <IconButton><ArrowBackIosIcon/></IconButton>

    </div>
}
export default ListArea