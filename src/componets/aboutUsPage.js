import { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export class AboutUsPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 text-center">
                    <div className="row pageTitle">
                        <div className="col-xs-12">
                            <div className="row buttonY">
                                <div className="col-xs-12">
                                    關於我們
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="row aboutUsBox">
                                <div className="aboutUsSubtitle col-xs-12">
                                    起源
                                </div>
                                <div className="aboutUsContent col-xs-12">
                                    Hello~
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="row aboutUsBox">
                                <div className="aboutUsSubtitle col-xs-12">
                                    成員
                                </div>
                                <div className="aboutUsContent col-xs-12">
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
            <div className="row aboutUsLink text-center">
                <div className="col-xs-12">
                    <Link to="aboutUsPage" className="aboutUsText">關於我們</Link>
                </div>
            </div>
        )
    }
}
