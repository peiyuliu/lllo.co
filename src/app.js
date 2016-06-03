//CSS

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import { FrontPage, TitleBar } from '../src/componets/homePage.js'
import { SearchPage } from '../src/componets/searchPage.js'
import { AboutUsLinkBar, AboutUsPage } from '../src/componets/aboutUsPage.js'
import { CartPage } from '../src/componets/cartPage.js'
import { WishListPage } from '../src/componets/wishListPage'
import { AccountLogInPage, AccountKeyInPage } from '../src/componets/accountLogInPage.js'
import { AccountPage, AccountInfPage, OrderInfPage } from '../src/componets/accountPage.js'
import { AllProductPage, ProductDetailPage } from '../src/componets/productPage.js'
import { AdPage, AdDetailPage } from '../src/componets/advertisementPage'

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
                    <div className="row page">
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <AboutUsLinkBar />
                </div>
            </div>
        );
    }
}

export class App extends Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Web}>
                    <IndexRoute component={FrontPage} />
                    <Route path="/adPage" component={AdPage} />
                    <Route path="/adDetailPage" component={AdDetailPage} />
                    <Route path="/allProductPage" component={AllProductPage} />
                    <Route path="/productDetailPage" component={ProductDetailPage} />
                    <Route path="/aboutUsPage" component={AboutUsPage} />
                    <Route path="/searchPage" component={SearchPage} />
                    <Route path="/cartPage" component={CartPage} />
                    <Route path="/wishListPage" component={WishListPage} />
                    <Route path="/accountLogInPage" component={AccountLogInPage} />
                    <Route path="/accountKeyInPage" component={AccountKeyInPage} />
                    <Route path="/accountPage" component={AccountPage} >
                        <Route path="/accountPage/accountInfPage" component={AccountInfPage} />
                        <Route path="/accountPage/orderInfPage" component={OrderInfPage} />
                    </Route>
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
