import { useState } from "react";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer(){
    const[itemsFetch,setMoviesFetch]=useState([])
    const getItems=()=>{
        fetch('algun_enlace').then((response)=>{return response.json()}).then((data)=>setMoviesFetch(data.results))
    }
    return(
    <div className="itemscontainer">
    <button onClick={getItems}>Obtener Productos</button>
    {itemsFetch.map(i=><ItemDetail tittle={i.tittle} description={i.description} rating={i.rating} price={i.rice}/>)}
    </div>
    )
    
    
        
}
export default ItemDetailContainer;