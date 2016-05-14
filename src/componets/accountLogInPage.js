import { Component } from 'react'
import { Link } from 'react-router'

import { AccountButton } from '../../src/componets/homePage.js'
import { FrontPage } from '../../src/componets/homePage.js'

export class AccountLogInPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="commentBox col-xs-12">
                    <div>登入 / 註冊</div>
                </div>
                <div className="col-xs-12">
                    <div className="email">E-mail</div>
                </div>
                <div className="col-xs-12">
                    <EmailInput/>
                </div>
                <div className="col-xs-12">
                    <div className="email">Password</div>
                </div>
                <div className="col-xs-12">
                    <PasswordInput/>
                </div>
                <div className="col-xs-12">
                    <LogInSignInButton />
                </div>
            </div>
        );
    }
}

class EmailInput extends Component {
    constructor() {
        super();
        this.state = {value: 'lllo.co@gmail.com'};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
}

class PasswordInput extends Component {
    constructor() {
        super();
        this.state = {value: '12345678'};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
}

class LogInSignInButton extends Component {
    constructor() {
        super();
        this.state = {empty: true};
    }
    render() {
        if (this.state.empty === true) {
            return (
                <Link to="/">
                    <div className="logInSignInButton">登入 / 註冊</div>
                </Link>
            )
        } else {
            return (
                <Link to="/accountKeyInPage">
                    <div className="logInSignInButton">登入 / 註冊</div>
                </Link>
            )
        }
    }
}

export class AccountKeyInPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    輸入會員資料
                </div>
                <div className="col-xs-12">
                    E-mail
                </div>
                <div className="col-xs-12">
                    <EmailInput/>
                </div>
                <div className="col-xs-12">
                    Password
                </div>
                <div className="col-xs-12">
                    <PasswordInput/>
                </div>
                <div className="col-xs-12">
                    Name
                </div>
                <div className="col-xs-12">
                    <NameInput/>
                </div>
                <div className="col-xs-12">
                    <LogInSignInButton />
                </div>
            </div>
        );
    }
}

class NameInput extends Component {
    constructor() {
        super();
        this.state = {value: 'Lllo.co'};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
}