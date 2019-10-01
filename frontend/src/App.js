import React, {Component} from 'react';
  
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import Checklist from './javascript/Checklist';
import Signin from './javascript/Signin';
import Signup from './javascript/Signup';
// import Login from './javascript/Login';
import Navbar from './javascript/Navbar';
import Register from './javascript/Register';
import { Route } from 'react-router-dom';
class App extends Component {


  render() {
      return (
          <React.Fragment className="App">
              <header>

                <Navbar></Navbar>

              </header>
              <div>
                {/* 初始進入頁面 */}
                {/* <Route path="/" exact component={Checklist} /> */}

                {/* 利用 auth 確認登入狀況, 才能進入 */} 
                {/* <Route path="/welcome" exact component={withAuth(Welcome)} /> */}

                {/* 不需登入即可進入的頁面 */}
                {/* <Route path="/search" exact component={Search} /> */}
                <Route path="/signin" exact component={Signin} /> 
                <Route path="/signup" exact component={Signup} /> 

              </div>
          </React.Fragment>
      );
  }
}

export default App;
