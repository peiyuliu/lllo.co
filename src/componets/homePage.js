import Llloco from 'babel!svg-react!../../img/llloco.svg?name=Llloco'

import {Link} from 'react-router'

export const LllocoButton = React.createClass({

    render: function() {
        return (
            <div className="row">
                <Llloco className="llloco img-responsive center-block"/>
            </div>
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
                    <img id="searchButton" src="img/searchButton.svg" className="img-responsive center-block"/>
                </div>
            </div>


        )
    }
});
