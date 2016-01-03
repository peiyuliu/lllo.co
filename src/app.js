//CSS

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"



import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

import { BasketButton, EmptyCartPage, CartPage} from '../src/componets/cartPage.js'
import { AccountButton, AccountPage, AccountLogIn} from '../src/componets/accountPage.js'
import { FrontPage, LllocoButton, SearchButton, SearchPage} from '../src/componets/homePage.js'

const App = React.createClass({
    render: function() {
        return (
            <div className="app row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                    <TitleBar />
                </div>
                <div className="col-xs-12">
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
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="searchPage" component={SearchPage} />
            <Route path="emptyCartPage" component={EmptyCartPage} />
            <Route path="cartPage" component={CartPage} />
            <Route path="accountLogIn" component={AccountLogIn} />
            <Route path="accountPage" component={AccountPage} />
        </Route>
    </Router>
), document.getElementById('content'))