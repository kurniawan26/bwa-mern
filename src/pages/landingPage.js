import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

import LandingPage from "json/landingPage.json";
import Categories from "parts/Categories";

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={LandingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={LandingPage.mostPicked}
        />
        <Categories data={LandingPage.categories}/>
      </>
    );
  }
}
