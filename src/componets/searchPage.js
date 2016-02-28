import { Component } from 'react'
import { Link } from 'react-router'

export class SearchPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 searchTitle">
                    <div className="text-center textHelpBuy">
                        在地人幫你買
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="text-center">
                        請於下方填入欲購買之商品網址
                    </div>
                    <div className="text-center">
                        確認商品並放入購物車後
                    </div>
                    <div className="text-center">
                        小幫手會幫您計算運費
                    </div>
                    <div className="text-center">
                        訂單於付款完成後立即為您處理
                    </div>
                </div>
                <div className="col-xs-12">
                    <SearchBarL />
                </div>
            </div>
        )
    }
}

export class SearchBarL extends Component {
    render() {
        return (
            <div className="row searchBarL center-block">
                <div className="col-xs-10 col-xs-offset-1 inputBar">
                    <InputBarL/>
                    <SearchBigButton/>
                </div>
            </div>
        )
    }
}

export class InputBarL extends Component {
    constructor() {
        super();
        this.state = {term: ''};
    }
    handleChange(event) {
        this.setState({term: event.target.value});
    }
    render() {
        return (
            <input placeholder="http://lllo.co" className="inputBarL" value={this.state.term} onChange={this.handleChange} />
        )
    }
}


export class SearchBigButton extends Component {
    render() {
        return (
            <img id="searchIconBig" src="img/searchIcon.svg"/>
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

