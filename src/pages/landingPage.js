import React, { Component } from 'react'

import Header from "parts/Header"

import LandingPage from "json/landingPage.json"
import Hero from 'parts/Hero'

export default class landingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={LandingPage.hero}/>
            </>
        )
    }
}
