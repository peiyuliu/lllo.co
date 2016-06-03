import React, { Component } from 'react'
import { Link } from 'react-router'
import AdList from '../../src/containers/ad-list'
import AdDetail from '../../src/containers/ad-detail'

export class AdPage extends Component {
    render(){
        return(
            <div>
                <AdList />
            </div>
        )
    }
}

export class AdDetailPage extends Component{
    render(){
        return(
            <div>
                <AdDetail />
            </div>
        )
    }
}