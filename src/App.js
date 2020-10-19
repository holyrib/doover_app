import React, {useEffect, useState} from 'react';
import './App.css';
import Main from "./components/Main";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import AuthService from "./services/auth";
const App = () =>{
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };
    return (

      <div className="App">
          <Router>
              <div>
                  <ul>
                      <li><Link to={"/"} className="active" href="#home">Главная</Link></li>
                      <li><Link to={"/"} href="#news">Корзина</Link></li>
                      {currentUser ? (
                          <div>
                              <li className="nav-item">
                                  <Link to={"/profile"} className="nav-link">
                                      {currentUser.username}
                                  </Link>
                              </li>
                              <li className="nav-item">
                                  <a href="/login" className="nav-link" onClick={logOut}>
                                      Выйти
                                  </a>
                              </li>
                          </div>
                      ) : (
                          <div>
                              <li className="nav-item">
                                  <Link to={"/login"} className="nav-link">
                                      Войти
                                  </Link>
                              </li>
                          </div>
                      )}
                  </ul>

                  <div className="container mt-3">
                      <Switch>
                          <Route exact path={["/", "/main"]} component={Main} />
                          <Route exact path="/login" component={Login} />
                          {/*<Route exact path="/profile" component={Profile} />*/}
                      </Switch>
                  </div>
              </div>
          </Router>
          {/*<Main/>*/}
      </div>
  );
}

export default App;
