import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
    render() {
        const { handleSubmit, reset } = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="username"
                    component="input"
                    type="text"
                    placeholder="Username"
                />
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                />
                <div>
                    <button type="button" onClick={reset}>Clean form</button>
                    <button type="submit" label="submit">Submit</button>
                </div>
            </form>
        );
    }
}