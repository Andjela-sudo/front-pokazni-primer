import Item from "./Item";

import {BrowserRouter as Router , Link , Switch, Route} from 'react-router-dom'
import Items from "./Items";
import { useEffect, useState } from "react";
import { getAll } from "./service";

function App() {
  const [items,setItems] = useState([])
  useEffect(()=>{
    getAll().then(res => {
      setItems(res.data)
    })
  },[])
  return (
    <Router>
      <Link to ="/hello"><Item/></Link>
      <Link to = "/items">ITEMS SA SERVERA</Link>
      <Switch>
        <Route exact path="/hello">
          <p>HELLO</p>
        </Route>
        <Route exact path="/items">
          <Items items={items}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
