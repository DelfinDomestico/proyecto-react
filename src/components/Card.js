import Contador from "./contador"
function Card({props}){
    return(
        <>
        <p>{props.tittle}</p>
        <p>{props.description}</p>
        <p>Precio: {props.price}</p>
        <Contador ></Contador>
        </>
    )
}
export default Card