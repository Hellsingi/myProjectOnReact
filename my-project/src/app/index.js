import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm'
import submit from '../components/LoginForm/submit';
import './style.scss';

class App extends Component {
    // submit = values => {
    //     console.log(JSON.stringify(values));
    //     alert(JSON.stringify(values));
    // };
    render() {
        return (
            <>
                <h1 className="title">Sing in</h1>
                <LoginForm onSubmit={submit}/>
            </>
        )
    }
}
export default App;