import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/index'
import './style.scss';

class App extends Component {
    submit = values => {
        alert(JSON.stringify(values));
    };
    render() {
        return (
            <>
                <h1 className="title">Sing in</h1>
                <LoginForm onSubmit={this.submit}></LoginForm>
            </>
        )
    }
}
export default App;