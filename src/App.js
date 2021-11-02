import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import ProductView from "@views/ProductView/index"

const App = () => {
  return (
    <>
      <Container>
        <ProductView />
      </Container>
    </>
  )
}
export default App
