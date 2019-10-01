import React, { Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

class Signup extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  // 改變資料到state
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  // 提交註冊資料,導回首頁
  onsubmit = event => {

    event.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    try {
      axios.post("/users", newUser)
      .then(res => {
        if(res.status === 200){
          alert("Sign up successful")
          this.props.history.push("/");
        }else{
          const error = new Error(res.error);
          alert(error)
          throw error;
        }
      })
    } catch (err) {
      console.error("error");
      alert("Error signup please try again");
    }
  }

  createNewUser = (newUser, history) => async dispatch => {
    try {
      await axios.post("/users", newUser)
      .then(res => {
        if(res.status === 200){
          alert("sign up successful")
          this.props.history.push("/");
        }else{
          const error = new Error(res.error);
          alert(error)
          throw error;
        }
      })
      history.push("/login");
      dispatch({
        type: 1,
        payload: {}
      });
    } catch (err) {
      console.error("error");
      alert("Error signup please try again");
      dispatch({
        type: -1,
        payload: err.response.data
      });
    }
  };

  render() {
    return (
      <MDBContainer className="h630">
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onsubmit}>
              <p className="h1 text-center mb-4">Sign up</p>
              <label
                htmlFor="defaultFormRegisterfirstNameEx"
                className="grey-text"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="defaultFormRegisterfirstNameEx"
                className="form-control"
                onChange={this.handleInputChange}
                value={this.state.firstName}
                required
              />
              <br />

              <label
                htmlFor="defaultFormRegisterlastNameEx"
                className="grey-text"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="defaultFormRegisterlastNameEx"
                className="form-control"
                onChange={this.handleInputChange}
                value={this.state.lastName}
                required
              />
              <br />

              <label
                htmlFor="defaultFormRegisterEmailEx"
                className="grey-text"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <br />

              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

export default Signup;