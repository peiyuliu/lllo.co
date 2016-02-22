import AccountOut from 'babel!svg-react!../../img/accountOut.svg?name=AccountOut'
import AccountIn from 'babel!svg-react!../../img/accountIn.svg?name=AccountIn'

import {Link} from 'react-router'
import {Icons} from '../../src/componets/icons.js'
import {AccountButton} from '../../src/app.js'

export const AccountPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="commentBox col-xs-12">
                    <div className="row">
                        <div className="col-xs-6">
                            <AccountInfButton/>
                        </div>
                        <div className="col-xs-6">
                            <OrderInfButton/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

const AccountInfButton = React.createClass({
    render: function() {
        return(
            <Link to="/accountInfPage">
                <div className="pull-left">
                    <div className="accountInfButton">會員資料</div>
                </div>
            </Link>
        )
    }
});

export const AccountInfPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">E-mail</div>
                <div className="col-xs-12">lllo.co@gmail.com</div>
                <div className="col-xs-12">Password</div>
                <div className="col-xs-12">12345678</div>
                <div className="col-xs-12">Name</div>
                <div className="col-xs-12">Lllo.co</div>
                <div className="col-xs-12">Mobile</div>
                <div className="col-xs-12">0912345678</div>
            </div>
        );
    }
});

const OrderInfButton = React.createClass({
    render: function() {
        return(
            <Link to="/orderInfPage">
                <div className="pull-left">
                    <div className="orderInfButton">訂單資訊</div>
                </div>
            </Link>
        )
    }
});

export const OrderInfPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">1</div>
                <div className="col-xs-12">2</div>
                <div className="col-xs-12">3</div>
            </div>
        );
    }
});
