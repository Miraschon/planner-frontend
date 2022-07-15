import * as React from "react"
import './ListArea.css'
import OpenCloseButton from "./OpenCloseButton";
import {useState} from "react";

function ListArea(props) {

    let {isShow, toggleShow}= props
   // let style='list'

   // console.log('isShow= ' + isShow)



        return <div className={'list'} id={"listArea"}>
            <p>Today</p>
            <OpenCloseButton onChange={toggleShow} position={'list'}/>
        </div>


}

export default ListArea
