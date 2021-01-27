import React from "react";
import heaphone from "../../assets/banner-images/headphone.png";
import TV from "../../assets/banner-images/tv.png";
import xbox from "../../assets/banner-images/xbox.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container mt-5" id="home">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-bg"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Mi LED TV 4A PRO 32</h1>
                  <p>
                    HD-Ready display, cinematic quality sound, multiple ports,
                    leading performance. 700000+ hours of content on Patchwall
                  </p>
                  <h1 className="price">$442</h1>
                </div>
                <div className="col-md-5">
                  <img src={TV} className="d-block w-100 img-fluid" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Xbox For Your Living Room</h1>
                  <p>
                    Xbox Game Pass Ultimate Perks Members get free in-game
                    content, add-ons, and exclusive partner offers.
                  </p>
                  <h1 className="price">$992</h1>
                </div>
                <div className="col-md-5">
                  <img
                    src={xbox}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1>Beats Pro Headphone</h1>
                  <p>
                    Clear Highs and Deep Lows With a solid interior sound
                    platform, these headphones let you hear rich highs and the
                    kind of bass that resonates deep in your chest.
                  </p>
                  <h1 className="price">$792</h1>
                </div>
                <div className="col-md-5">
                  <img
                    src={heaphone}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
