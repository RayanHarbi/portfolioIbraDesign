import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from "./components/Menu"
import Header from "./components/Header"
import WhoAre from "./components/WhoAre"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Menu />
      <Header />
      <WhoAre />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
