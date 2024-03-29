import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React, { Component } from "react";

import EventBus from "./common/EventBus";
import AuthService from './services/authService';
import Login from './componets/Login';
import Register from './componets/Register';
import BoardUser from './componets/BoardUser';
import BoardModerator from './componets/BoardMod';
import BoardAdmin from './componets/BoardAdmin';
import Home from './componets/Home';
import Profile from './componets/Profile';
import Product from './componets/Products';
import Cart from './componets/Cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (


        <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} /> 
              <Route path="/product" element={<Product/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    );
  }
}

export default App;
