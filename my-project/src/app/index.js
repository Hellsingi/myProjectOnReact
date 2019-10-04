import React, { Component } from "react";
import LoginForm from "../components/LoginForm/loginForm";
import submit from "../components/LoginForm/submit";
import "./style.scss";

class App extends Component {
  // submit = values => {
  //     console.log(JSON.stringify(values));
  //     alert(JSON.stringify(values));
  // };
  render() {
    return (
      <>
        <h1 className="title">Sing in</h1>
        <div className="image">
          <LoginForm onSubmit={submit} />
        </div>
      </>
    );
  }
}
export default App;
