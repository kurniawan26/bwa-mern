import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import LandingPage from "json/landingPage.json";
import Footer from "parts/Footer";

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
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
        <Categories data={LandingPage.categories} />
        <Testimoni data={LandingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
