import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import myInput from '../Field/index';
import {requiredInput} from '../../Validation/index';

class LoginForm extends Component {
    render() {
        const { handleSubmit, reset } = this.props;

        // const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="username"
                    component={myInput}
                    type="text"
                    placeholder="Username"
                    validate = {requiredInput}
                />
                <Field
                    name="password"
                    component={myInput}
                    type="password"
                    placeholder="Password"
                    validate = {requiredInput}
                />
                <div>
                    <button type="button" onClick={reset}>Clean form</button>
                    <button type="submit" label="submit">Submit</button>
                </div>
            </form>
        );
    }
}

LoginForm = reduxForm ({
    form: 'login',
}) (LoginForm);

export default LoginForm;