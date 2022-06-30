import {useState} from "react";
function Contador(){
    const[num,setNum]=useState(0);
    const sumar=()=>{
        setNum(num+1)
    };
    return(
        <>
            <button onClick={sumar}>Agregar </button>
            <p>{num}</p>
        </>
    )
}
export default Contador