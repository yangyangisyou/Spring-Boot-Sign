import React, { Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import serverip from "./config/serverip";
import axios from "axios";
import setJWTToken from "./setJWTToken";
import jwt_decode from "jwt-decode";


export const login = LoginRequest => async dispatch => {
  
  try {
    // post => Login Request
    const res = await axios.post("/login", LoginRequest)
    .then(res => {
      if(res.status === 200){
        alert("Sign in successful")
        this.props.history.push("/");
      }else{
        const error = new Error(res.error);
        alert(error)
        throw error;
      }
    })

    // extract token from res.data
    const { token } = res.data;

    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);

    // set our token in header ***
    setJWTToken(token);

    // decode token on React
    const decoded = jwt_decode(token);

    alert("Sign in successful.")
    console.log("Sign in successful.")

    // dispatch to our securityReducer
    dispatch({
      type: 1,
      payload: decoded
    });

  } catch (err) {
    alert("Sign in failed.")
    console.log("Sign in failed.")
    dispatch({
      type: -1,
      payload: err.response.data
    });
  }
};


class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  // componentDidMount() {
  //   if (this.props.security.validToken) {
  //     this.props.history.push("/");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.security.validToken) {
  //     this.props.history.push("/");
  //   }

  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }



  // 改變輸入資料到state
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  
  // 提交登入資料
  onSubmit = event => {
    event.preventDefault();

    const LoginRequest = {
      email: this.state.email,
      password: this.state.password
    };

    //this.props.login(LoginRequest);
    //LoginRequest();
    login(LoginRequest);
  };

  



  render() {
    return (
      <MDBContainer className="h630">
        <MDBRow>
          <MDBCol md="4">
            <form onSubmit={this.onSubmit}>
              <p className="h1 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginNameEx" className="grey-text">
                email
              </label>
              <input
                type="email"
                name="email"
                id="defaultFormLoginNameEx"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                password
              </label>
              <input
                type="password"
                name="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Signin;