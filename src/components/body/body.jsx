import React from "react";
import "../body/body.css";
import Image1 from "../images/1.png";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";
import Image5 from "../images/5.png";
import Image6 from "../images/6.png";
import Image7 from "../images/7.png";
import Image8 from "../images/8.png";
import Image9 from "../images/9.png";
import Image10 from "../images/10.jpg";

const Body = () => {
  return (
    <div>
      <diV className="container">
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image1} />
          </div>

          <div className="service-text">Buy New Appliances</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image2} />
          </div>

          <div className="service-text">Laptop/PC repair</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image3} />
          </div>

          <div className="service-text">Geyser Services</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image4} />
          </div>

          <div className="service-text">UNISEX Salon & Spa</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image5} />
          </div>

          <div className="service-text">AC repair</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image6} />
          </div>

          <div className="service-text">LED TV repair</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image7} />
          </div>

          <div className="service-text">Fridge repair</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image8} />
          </div>

          <div className="service-text">Micro wave oven repair</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image9} />
          </div>

          <div className="service-text">Other Applicances repair</div>
        </div>
        <div className="service-wrapper">
          <div className="service-img">
            <img src={Image10} />
          </div>

          <div className="service-text">Electircian</div>
        </div>
      </diV>
    </div>
  );
};

export default Body;
