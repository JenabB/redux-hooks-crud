import React from "react";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Components
import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/products/new">
              <NewProduct />
            </Route>
            <Route path="/products/edit/:id">
              <EditProduct />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
