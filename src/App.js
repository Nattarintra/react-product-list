import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import ProductView from "@views/ProductView/index"

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Container>
              <ProductView />
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App
