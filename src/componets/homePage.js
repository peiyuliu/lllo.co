import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import { AboutUsLinkBar } from '../../src/componets/aboutUsPage.js'
import { SearchPage } from '../../src/componets/searchPage.js'
import { CartPage } from '../../src/componets/cartPage.js'
import AdList from '../../src/containers/ad-list'

export class TitleBar extends Component {
    render() {
        return (
            <div className="row titleBar">
                <div className="col-xs-5">
                    <LllocoButton/>
                </div>
                <div className="col-xs-4 col-sm-3 col-md-3 col-lg-2 pull-right">
                    <BasketButton/>
                    <AccountButton/>
                </div>
            </div>
        )
    }
}

export class LllocoButton extends Component {
    render() {
        return (
            <IndexLink to="/">
                <img src="../../img/llloco.svg" className="llloco"/>
            </IndexLink>
        )
    }
}

export class BasketButton extends Component {
    constructor() {
        super();
        this.state = { empty: true };
    }
    render() {
        if (this.state.empty === true) {
            return (
                <Link to="/cartPage" className="bButton">
                    <img src="../../img/basketEmpty.svg" />
                </Link>
            )
        } else {
            return (
                <Link to="/cartPage" className="bButton">
                    <img src="../../img/basket.svg"/>
                </Link>
            )
        }
    }
}

export class AccountButton extends Component {
    constructor() {
        super();
        this.state = {logIn: true};
    }
    render() {
        if (this.state.logIn === true) {
            return (
                <Link to="/accountLogInPage">
                    <img src="../../img/accountLogIn.svg"/>
                </Link>
            )
        } else {
            return (
                <Link to="/accountPage/accountInfPage">
                    <img src="../../img/accountIcon.svg"/>
                </Link>
            )
        }
    }
}

export class FrontPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 frontPage">
                    <Link to="searchPage" className="text-center center-block">
                        <div className="textHelpBuy">在地人幫你買</div>
                        <img id="searchButton" src="img/searchButton.svg"/>
                    </Link>
                    <Link to="adPage">Advertisement Page</Link>
                </div>
            </div>
        )
    }
}



