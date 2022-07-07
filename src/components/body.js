import Navbar from "./navbar"
import ItemListContainer from "./ItemListContainer"
import Item from "./Item";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Body(){
    return(
        <>
            <Navbar />
            <Routes>
                <Route exact path="/product/:characterId" element={<Item/>} ></Route>
            </Routes>
            <ItemListContainer />
        </>
    )
}
export default Body