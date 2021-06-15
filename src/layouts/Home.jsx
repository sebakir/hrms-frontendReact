import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="page">
      <div className="home-div-one">
        <h1 className="desc one">Serving you since 1989.</h1>
        <h1 className="desc two">
          Acme Outdoors is an outdoor and adventure shop located in the
          Boathouse District in Oklahoma City.
        </h1>
        <Link className="desc shop-btn" to="/shop">
          Shop Merch
        </Link>
      </div>
      <div className="home-div-two">
        <div className="support-head">
          <div className="support-left">
            <h3>WAYS TO SUPPORT</h3>
            <h1>Support Acme Outdoors.</h1>
          </div>
          <div className="support-right">
            COVID-19 has forced us to close our retail space, but we need
            support from patrons like yourself now more than ever. Below, we’ve
            listed the best ways to help us through this season.
          </div>
        </div>
        <div className="support-options">
          <div className="support-option-card">
            <div className="support-card">
              <h1>01</h1>
              <h1>
                SHOP
                <br />
                PRODUCTS
              </h1>
              <div className="card1"></div>
            </div>
            <p>
              Our full product line is still available online here on our site!
              Getting outside and hiking is still something you can do. Get your
              gear now!
            </p>
          </div>
          <div className="support-option-card">
            <div className="support-card">
              <h1>02</h1>
              <h1>DONATE</h1>
              <div className="card2"></div>
              <div className="card2"></div>
            </div>
            <p>
              Since we've changed the way we operate to online only, and to
              ensure your safety, not all our staff is working. Donate to keep
              them afloat.
            </p>
          </div>
          <div className="support-option-card">
            <div className="support-card">
              <h1>03</h1>
              <h1>
                BUY
                <br />
                GIFT CARDS
              </h1>
              <div className="card3"></div>
            </div>
            <p>
              Have all the outdoor gear you need for now? Buy a gift card and
              use it later or share it with friends and family.
            </p>
          </div>
        </div>
      </div>
      <div className="home-div-three">
        <h1 className="desc three">
          How we're keeping you safe during COVID-19
        </h1>
        <h1 className="desc four">
          As an outdoor shop, we’ve taken precautionary measures to ensure the
          safety of all our customers and team members.
        </h1>
        <Link className="desc stmt-btn" to="/how-were-responding-to-covid-19">
          Read Our Statement
        </Link>
      </div>
    </div>
  );
}
