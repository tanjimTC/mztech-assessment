import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./Components/Hoc/PrivateRoute";
import Cameras from "./Components/Product/Camera/Cameras";
import Laptops from "./Components/Product/Laptop/Laptops";
import Phones from "./Components/Product/Phone/Phones";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import AccountContainer from "./Containers/AccountContainer";
import HomeContainer from "./Containers/HomeContainer";
import ProductContainer from "./Containers/ProductContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <PrivateRoute exact path="/product">
            <ProductContainer />
          </PrivateRoute>
          <Route exact path="/account">
            <AccountContainer />
          </Route>
          <Route exact path="/catgoryphone">
            <Phones />
          </Route>
          <Route exact path="/catgorylaptop">
            <Laptops />
          </Route>
          <Route exact path="/catgorycamera">
            <Cameras />
          </Route>
          <Route exact path="/details/:productKey">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
