import { Component } from 'react'
import { Link } from 'react-router'

import { SearchBarSmall } from '../../src/componets/searchPage.js'
import { AboutUsLinkBar } from '../../src/componets/aboutUsPage.js'

export class AdvertisementPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <SearchBarSmall />
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
                <div className="col-xs-12">
                    <AboutUsLinkBar />
                </div>
            </div>
        )
    }
}



