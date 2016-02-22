//CSS

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hasHistory, IndexRoute} from 'react-router'
import { Icons } from '../src/componets/icons.js'
import { BasketPage, EmptyCartPage, CartPage, WishListsPage} from '../src/componets/basketPage.js'
import { AccountLogInPage, AccountKeyInPage} from '../src/componets/accountLogInPage.js'
import { AccountPage, AccountInfPage, OrderInfPage} from '../src/componets/accountPage.js'
import { FrontPage, LllocoButton, SearchButton, SearchPage} from '../src/componets/homePage.js'

const App = React.createClass({
    render: function() {
        return (
            <div className="app row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                    <TitleBar />
                </div>
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

const TitleBar = React.createClass({
    render: function(){
        return (
            <div className="row titleBar">
                <div className="col-xs-2 col-md-2">
                    <BasketButton className="pull-left"/>
                </div>
                <div className="col-xs-8 col-md-8">
                    <LllocoButton className="center-block"/>
                </div>
                <div className="col-xs-2 col-md-2">
                    <AccountButton className="pull-right"/>
                </div>
            </div>
        )
    }
});

export const BasketButton = React.createClass({
    getInitialState: function() {
        return {empty: true};
    },
    render: function() {
        if (this.state.empty === true) {
            return (
                <Link to="/emptyCartPage">
                    <div className="pull-left">
                        <Icons icon="cartAdd" size="25px" fill="#00BCD4" />
                    </div>
                </Link>
            )
        } else {
            return (
                <Link to="/cartPage">
                    <div className="pull-left">
                        <Icons icon="cartFull" size="25px" fill="#00BCD4" />
                    </div>
                </Link>
            )
        }
    }
});

export const AccountButton = React.createClass({
    getInitialState: function() {
        return {logIn: true};
    },
    render: function() {
        if (this.state.logIn === true) {
            return (
                <Link to="/accountLogInPage">
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

const Test = React.createClass({
    render: function() {
        return(
            <div className="row">
                <div className="col-xs-12">
                    <textarea name="description" value="This is a description." />
                </div>
                <div className="col-xs-12">
                    <select value="B" className="center-block">
                        <option value="A">Apple</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                </div>
            </div>
        )
    }
});

const Information = React.createClass({
    render: function() {
        var Mapfunction =  this.props.data.map(function(d){
            return (
                <InformationList subtitle={d.subtitle} text={d.text} />
            )
        });
        return (
            <div className="row">
                {Mapfunction}
            </div>
        )
    }
});

const InformationList = React.createClass({
    render: function() {
        return(
            <div className="col-xs-6">
                <h4>{this.props.subtitle}</h4>
                <h5>{this.props.text}</h5>
            </div>
        )
    }
});

const data = [
    {subtitle: "Summary", text: "Hello"},
    {subtitle: "Work Experience", text: "PEGA"},
];


render((
    <Router history={hasHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="/searchPage" component={SearchPage} />
            <Route path="/basketPage" component={BasketPage}>
                <Route path="/cartPage" component={CartPage} />
                <Route path="/emptyCartPage" component={EmptyCartPage} />
                <Route path="/wishListsPage" component={WishListsPage} />
            </Route>
            <Route path="/accountLogInPage" component={AccountLogInPage} >
                <Route path="/accountKeyInPage" component={AccountKeyInPage} />
            </Route>
            <Route path="/accountPage" component={AccountPage} >
                <Route path="/accountInfPage" component={AccountInfPage} />
                <Route path="/orderInfPage" component={OrderInfPage} />
            </Route>
        </Route>
    </Router>
), document.getElementById('content'))