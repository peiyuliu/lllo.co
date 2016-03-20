//CSS

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import { FrontPage, TitleBar } from '../src/componets/homePage.js'
import { SearchPage } from '../src/componets/searchPage.js'
import { AboutUsLinkBar, AboutUsPage } from '../src/componets/aboutUsPage.js'
import { BasketPage, EmptyCartPage, CartPage, WishListsPage } from '../src/componets/basketPage.js'
import { AccountLogInPage, AccountKeyInPage } from '../src/componets/accountLogInPage.js'
import { AccountPage, AccountInfPage, OrderInfPage } from '../src/componets/accountPage.js'
import { ProductPage } from '../src/componets/productPage.js'
import { AdPage } from '../src/componets/advertisementPage'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

export class Web extends Component {
    render () {
        return (
            <div className="row app">
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <TitleBar />
                </div>
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <div className="row page"><div className="col-xs-12">
                    {this.props.children}
                        </div></div>
                </div>
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <AboutUsLinkBar />
                </div>
            </div>
        );
    }
}

//const Test = React.createClass({
//    render: function() {
//        return(
//            <div className="row">
//                <div className="col-xs-12">
//                    <textarea name="description" value="This is a description." />
//                </div>
//                <div className="col-xs-12">
//                    <select value="B" className="center-block">
//                        <option value="A">Apple</option>
//                        <option value="B">Banana</option>
//                        <option value="C">Cranberry</option>
//                    </select>
//                </div>
//            </div>
//        )
//    }
//});
//
//const Information = React.createClass({
//    render: function() {
//        var Mapfunction =  this.props.data.map(function(d){
//            return (
//                <InformationList subtitle={d.subtitle} text={d.text} />
//            )
//        });
//        return (
//            <div className="row">
//                {Mapfunction}
//            </div>
//        )
//    }
//});
//
//const InformationList = React.createClass({
//    render: function() {
//        return(
//            <div className="col-xs-6">
//                <h4>{this.props.subtitle}</h4>
//                <h5>{this.props.text}</h5>
//            </div>
//        )
//    }
//});
//
//class Abc extends Component {
//    constructor (props){
//    super(props);
//    this.state = { term: ''}
//    }
//    render () {
//    return(
//        <div className="col-xs-6">
//            <h4>{this.props.subtitle}</h4>
//            <h5>{this.props.text}</h5>
//        </div>
//    )
//}
//};
//
//const data = [
//    {subtitle: "Summary", text: "Hello"},
//    {subtitle: "Work Experience", text: "PEGA"},
//];

export class App extends Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Web}>
                    <IndexRoute component={FrontPage} />
                    <Route path="/adPage" component={AdPage} />
                    <Route path="/aboutUsPage" component={AboutUsPage} />
                    <Route path="/searchPage" component={SearchPage} />
                    <Route path="/basketPage" component={BasketPage} >
                        <Route path="/basketPage/cartPage" component={CartPage} />
                        <Route path="/basketPage/emptyCartPage" component={EmptyCartPage} />
                    </Route>
                    <Route path="/wishListsPage" component={WishListsPage} />
                    <Route path="/accountLogInPage" component={AccountLogInPage} />
                    <Route path="/accountKeyInPage" component={AccountKeyInPage} />
                    <Route path="/accountPage" component={AccountPage} >
                        <Route path="/accountPage/accountInfPage" component={AccountInfPage} />
                        <Route path="/accountPage/orderInfPage" component={OrderInfPage} />
                    </Route>
                    <Route path="/productPage" component={ProductPage} />
                </Route>
            </Router>
        )
    }
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('content'));
