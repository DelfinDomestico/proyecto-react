import 'bootstrap/dist/css/bootstrap.css';
import Item from "./Item"
import{useEffect, useState} from "react";
function ItemListContainer(){
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('data.json').then((resp)=>resp.json()).then((data)=>setInfo(data))
    },[])
    return(
        <>
        {info.map(i=><Item tittle={i.tittle} description={i.description} price={i.price}/>)}
        </>
    );
}
export default ItemListContainer