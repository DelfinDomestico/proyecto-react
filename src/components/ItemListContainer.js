import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card"
import{useEffect, useState} from "react";
function ItemListContainer(){
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('data.json').then((resp)=>resp.json()).then((data)=>setInfo(data))
    },[])
    return(
        <>
        {console.log(info)}
        {info.map(i=><Card tittle={i.tittle} description={i.description} price={i.price}/>)}
        </>
    );
}
export default ItemListContainer