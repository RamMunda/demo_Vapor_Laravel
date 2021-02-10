import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/mainPages/Home";
import Signin from './components/mainPages/Signin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Signin}/>         
      </BrowserRouter>

    </div>
  );
}

export default App;
