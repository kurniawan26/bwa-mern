import React from "react";

import HeroJPG from "assets/img/images/picture-hero.jpg";
import HeroJPGFrame from "assets/img/images/frame.jpg";
import IconCities from "assets/img/icons/ic_cities.svg";
import IconTraveler from "assets/img/icons/ic_traveler.svg";
import IconTreasure from "assets/img/icons/ic_treasure.svg";

import Button from "elements/button";

import numberFormat from "utilities/formatNumber"
export default function Hero(props) {
  function showMustPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMustPicked}
          >
            Show Me Now
          </Button>

          <div className="row" style={{marginTop: "80px"}}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36px"
                height="36px"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36px"
                height="36px"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36px"
                height="36px"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{width: 520, height: 410}}>
            <img
              src={HeroJPG}
              alt="Room With couchess"
              className="img-fluid position-absolute"
              style={{ margin: "-30 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={HeroJPGFrame}
              alt="Room With couchess frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0", zIndex: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
