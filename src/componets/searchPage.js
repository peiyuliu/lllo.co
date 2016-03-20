import { Component } from 'react'
import { Link } from 'react-router'
import { ProductPage } from '../../src/componets/productPage.js'

export class SearchPage extends Component {
    render() {
        return (
            <div className="row searchPage">
                <div className="col-xs-12 text-center textHelpBuy">
                    在地人幫你買
                </div>
                <div className="col-xs-12 text-center">
                    <div>請於下方填入欲購買之商品網址</div>
                    <div>確認商品並放入購物車後</div>
                    <div>小幫手會幫您計算運費</div>
                    <div>訂單於付款完成後立即為您處理</div>
                </div>
                <div className="col-xs-12 searchBar">
                    <InputBarL />
                </div>
                <div className="col-xs-12 searchBar">
                    <SearchBigButton />
                </div>
            </div>
        )
    }
}


export class InputBarL extends Component {
    constructor() {
        super();
        this.state = { productLink: '' };
    }
    handleChange(event) {
        this.setState({ productLink: event.target.value });
    }
    render() {
        return (
            <input
                placeholder="http://lllo.co"
                className="inputBarL center-block"
                value={this.state.productLink}
                onChange={this.handleChange} />
        )
    }
}

export class SearchBigButton extends Component {
    render() {
        return (
            <Link to="/productPage">
                <img id="searchIconBig" src="img/searchIcon.svg" className="center-block"/>
            </Link>
        )
    }
}

export class SearchBarSmall extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <img id="searchIcon" src="img/searchIcon.svg" className="img-responsive center-block"/>
                </div>
            </div>
        )
    }
}

