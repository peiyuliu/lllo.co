import { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import { AboutUsLinkBar } from '../../src/componets/aboutUsPage.js'
import { SearchPage } from '../../src/componets/searchPage.js'
import { BasketPage } from '../../src/componets/basketPage.js'

export class TitleBar extends Component {
    render() {
        return (
            <div className="row titleBar">
                <div className="col-xs-5">
                    <LllocoButton/>
                </div>
                <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 pull-right">
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
                <Link to="/basketPage" className="bButton">
                    <BasketButtonA/>
                </Link>
            )
        } else {
            return (
                <Link to="/basketPage" className="bButton">
                    <BasketButtonF/>
                </Link>
            )
        }
    }
}

export class BasketButtonA extends Component {
    render() {
        return (
            <img src="../../img/basketEmpty.svg" />
            )
    }
}

export class BasketButtonF extends Component {
    render() {
        return (
            <img src="../../img/basket.svg"/>
        )
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
                <Link to="/accountLogInPage" className="aButton">
                    <img src="../../img/accountLogIn.svg"/>
                </Link>
            )
        } else {
            return (
                <Link to="/accountPage/accountInfPage" className="aButton">
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
                <div className="col-xs-12 searchTitle">
                    <Link to="searchPage" className="text-center center-block">
                        <div className="textHelpBuy">在地人幫你買</div>
                        <img id="searchButton" src="img/searchButton.svg"/>
                    </Link>
                </div>
            </div>
        )
    }
}



