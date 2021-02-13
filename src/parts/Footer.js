import React from "react";

import Button from "elements/button";
import IconText from "parts/iconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We Kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-2">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/carrers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Term & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="mailto:kirigaya.kurniawan@gmail.com"
                >
                  Kirigaaya.kurniawan@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="http://wa.me/6285887453948"
                >
                  +62 8588 7453 3948
                </Button>
              </li>
              <li className="list-group-item">
                <span>Jasinga, Bogor, Jawa Barat</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
              &#169; Copyright 2021 - All rights reserved Fauzi Kurniawan
          </div>
        </div>
      </div>
    </footer>
  );
}
