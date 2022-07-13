import './App.css';
import SideMenu from "../components/SideMenu";
import ListArea from "../components/ListArea";
import {useState} from "react";

function App() {
    const [isShow, setShow] = useState('true')

    function toggleShow(){
        if(isShow){
            setShow('false')
        }else{
            setShow('true')
        }
    }

    return <div className={"container"}>
        <SideMenu isShow={isShow}/>
       <ListArea toggleShow={toggleShow} isShow={isShow}/>
    </div>
}

export default App;
