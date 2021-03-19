import { Route, Router, Switch } from "react-router-dom";
import Home from "./screens/Home";
import SomeComponent from "./screens/SomeComponent";


function App() {
  return (
    <div className="App">      
      <Switch>
        <Route path="/" exact component={Home} />
         {/* <Route path="/somepath/:someInfo" component={SomeComponent} /> */}
        <Route path="/somepath/:someInfo" component={SomeComponent} />
       </Switch>
    </div>
  );
}

export default App;
