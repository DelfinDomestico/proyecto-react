import Contador from "./contador"
function Card({props}){
    return(
        <>
        <p>Aquí se agregará información sobre los productos o servicios</p>
        <Contador nombre={props.nombre}/>
        </>
    )
}
export default Card