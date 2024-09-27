import Topic from "./components/Topic"
import Popular from "./components/Popular"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale"
import Recommended from "./components/Recommended"
import Footer from "./components/Footer"


function App(){
    return(
        <>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Recommended></Recommended>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default App