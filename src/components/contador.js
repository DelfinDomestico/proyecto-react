import {UserState} from "react";
function Contador({props}){
    const[num,setNum]=UserState(0)
    const sumar=()=>{
        setNum(num+1);
    }
    return(
        <button onClick={sumar}>Agregar {props.nombre} </button>
        <p>num</p>
    )
}
export default Contador