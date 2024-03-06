import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Services from "./components/services/services"

function App(){
    return(
        <>
            <Header />
            <About />
            <Services />
            <Blog />
            <Footer />
        </>

    )
}
export default App