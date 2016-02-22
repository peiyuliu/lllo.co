import AccountOut from 'babel!svg-react!../../img/accountOut.svg?name=AccountOut'
import AccountIn from 'babel!svg-react!../../img/accountIn.svg?name=AccountIn'

import {Link} from 'react-router'
import {Icons} from '../../src/componets/icons.js'
import {AccountButton} from '../../src/app.js'
import {FrontPage} from '../../src/componets/homePage.js'

export const AccountLogInPage = React.createClass({
    render: function() {
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
});

const EmailInput = React.createClass({
    getInitialState: function() {
        return {value: 'lllo.co@gmail.com'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
});

const PasswordInput = React.createClass({
    getInitialState: function() {
        return {value: '12345678'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
});

const LogInSignInButton = React.createClass({
    getInitialState: function() {
        return {empty: true};
    },
    render: function() {
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
});

export const AccountKeyInPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="commentBox col-xs-12">
                    <div>輸入會員資料</div>
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
                    <div className="email">Name</div>
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
});

const NameInput = React.createClass({
    getInitialState: function() {
        return {value: 'Lllo.co'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
});