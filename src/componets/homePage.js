import Llloco from 'babel!svg-react!../../img/llloco.svg?name=Llloco'

import {Link, IndexLink} from 'react-router'

export const LllocoButton = React.createClass({
    render: function() {
        return (
            <IndexLink to="/">
                <div className="row">
                    <Llloco className="llloco img-responsive center-block"/>
                </div>
            </IndexLink>
        )
    }
});

export const FrontPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="searchTitle col-xs-12 text-center">
                    <h4>在地人幫你買</h4>
                </div>
                <div className="col-xs-12">
                    <SearchButton />
                </div>
            </div>
        )
    }
});

export const SearchButton = React.createClass({
    render: function() {
        return (
            <Link to="searchPage">
                <img id="searchButton" src="img/searchButton.svg" className="img-responsive center-block"/>
            </Link>
        )
    }
});

export const SearchPage = React.createClass({
    getInitialState: function() {
        return {value: 'http://lllo.co'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
})

