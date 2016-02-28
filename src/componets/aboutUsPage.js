import { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export class AboutUsPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="pageTitle col-xs-12 text-center">
                    <div>關於我們</div>
                </div>
                <div className="aboutUsAllContent col-xs-12">
                    <div className="row">
                        <div className="aboutUsBox col-xs-12">
                            <div className="row">
                                <div className="aboutUsSubtitle col-xs-12 col-md-1">
                                    起源
                                </div>
                                <div className="aboutUsContent col-xs-11 col-md-11">
                                    Hello~
                                </div>
                            </div>
                        </div>
                        <div className="aboutUsBox col-xs-12">
                            <div className="row">
                                <div className="aboutUsSubtitle col-xs-12 col-md-1">
                                    成員
                                </div>
                                <div className="aboutUsContent col-xs-11 col-md-11">
                                    Welcome to Lllo.co !
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class AboutUsLinkBar extends Component {
    render() {
        return (
            <div className="row aboutUsLinkBar">
                <div className="col-xs-12 text-center aboutUsBar">
                    <Link to="aboutUsPage" className="aboutUsLink">關於我們</Link>
                </div>
            </div>
        )
    }
}
