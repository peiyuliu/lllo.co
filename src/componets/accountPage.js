import { Component } from 'react'
import { Link } from 'react-router'
import { AccountButton } from '../../src/componets/homePage.js'

export class AccountPage extends Component {
    render() {
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
}

class AccountInfButton extends Component {
    render() {
        return(
            <Link to="/accountPage/accountInfPage">
                <div className="pull-left">
                    <div className="accountInfButton">會員資料</div>
                </div>
            </Link>
        )
    }
}

export class AccountInfPage extends Component {
    render() {
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
}

class OrderInfButton extends Component {
    render() {
        return(
            <Link to="/accountPage/orderInfPage">
                <div className="pull-left">
                    <div className="orderInfButton">訂單資訊</div>
                </div>
            </Link>
        )
    }
}

export class OrderInfPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">1</div>
                <div className="col-xs-12">2</div>
                <div className="col-xs-12">3</div>
            </div>
        );
    }
}
