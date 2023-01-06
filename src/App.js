import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path = '/' exact component={Home}/>
            <Redirect to="/"/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
