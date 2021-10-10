import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import OrderSummary from './components/OrderSummary';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [itemDetail, setItemDetail] = useState([])
  const [isIconClicked, setIconClicked] = useState(false);

  return (
    <div >

      <Router>
        <Header setIconClicked={setIconClicked} isIconClicked={isIconClicked} />


        <Switch>

          (<Route path="/" exact>
            <Content itemDetail={itemDetail} setItemDetail={setItemDetail} />
          </Route>
          )


          <Route path="/summary" >
            <OrderSummary setIconClicked={setIconClicked} itemDetail={itemDetail} setItemDetail={setItemDetail} />
          </Route>


        </Switch>

      </Router>
    </div>
  );
}

export default App;
