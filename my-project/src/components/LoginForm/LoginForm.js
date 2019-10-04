import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "../common/Field/myInput";
import { requiredInput } from "../../Validation/validation";
import "./loginForm.scss";

class LoginForm extends Component {
  //   submit = values => {
  //     console.log(JSON.stringify(values));
  //     alert(JSON.stringify(values));
  //   };

  render() {
    const { handleSubmit, reset } = this.props;

    return (
      <>
        <form onSubmit={handleSubmit} className="formLogin">
          <Field
            name="username"
            component={myInput}
            type="text"
            placeholder="Username"
            validate={requiredInput}
          />
          <br />
          <Field
            name="password"
            component={myInput}
            type="password"
            placeholder="Password"
            validate={requiredInput}
          />
          <div>
            <button type="button" onClick={reset}>
              Clean form
            </button>
            <button type="submit" onClick={this.submit}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

// const onSubmit = (values, dispatch) => {
//   console.log(JSON.stringify(values));
//   alert(JSON.stringify(values));
// };

LoginForm = reduxForm({
  form: "login"
  //   onSubmit
})(LoginForm);

export default LoginForm;
