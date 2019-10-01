import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/index'

class App extends Component {
    submit = values => {
        console.log(JSON.stringify(values));
    };
    render() {
        return (
            <>
                <h1>Redux Form</h1>
                <LoginForm onSubmit={this.submit}></LoginForm>
            </>
        )
    }
}
export default App;