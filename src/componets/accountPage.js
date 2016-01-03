import AccountOut from 'babel!svg-react!../../img/accountOut.svg?name=AccountOut'
import AccountIn from 'babel!svg-react!../../img/accountIn.svg?name=AccountIn'

import {Link} from 'react-router'
import {Icons} from '../../src/componets/icons.js'

export const AccountButton = React.createClass({
    getInitialState: function() {
        return {logIn: true};
    },
    render: function() {
        if (this.state.logIn === true) {
            return (
                <Link to="/accountLogIn">
                    <div className="pull-right">
                        <Icons icon="accountOut" size="25px" fill="#00BCD4" />
                    </div>
                </Link>
            )
        } else {
            return (
                <Link to="/accountPage">
                    <div className="pull-right">
                        <Icons icon="accountIn" size="25px" fill="#00BCD4" />
                    </div>
                </Link>
            )
        }
    }
});

export const AccountPage = React.createClass({
    render: function() {
        return (
            <div className="commentBox row">
                <div className="basketName center-block">
                    會員資料
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export const AccountLogIn = React.createClass({
    render: function() {
        return (
            <div className="commentBox row">
                <div className="basketName center-block">
                    LogIn, Please.
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
})

