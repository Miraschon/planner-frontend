import * as React from "react"
import './ListArea.css'
import {useState} from "react";
import OpenCloseButton from "./OpenCloseButton";

function ListArea() {
    const [position, setPosition] = useState('list')


    function changePosition() {
        if (position === 'cover') {
            setPosition('list')

        } else {
            setPosition('cover')
        }
        return position
    }


    return <div className={position} id={"listArea"}>
        <p>Today</p>
        <OpenCloseButton onChange={changePosition} position={position}/>
    </div>
}

export default ListArea