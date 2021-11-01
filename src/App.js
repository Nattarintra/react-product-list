import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar/Navbar"
import ProductCard from "./components/product-card/ProductCard"

const App = () => {
  return (
    <>
      <Navbar />
      <ProductCard />
    </>
  )
}
export default App
