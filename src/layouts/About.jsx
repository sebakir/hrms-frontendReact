import { Link } from "react-router-dom";
import "../styles/About.css";


export default function () {
  return (
    <div className="page">
      <div className="about-div1">
        <h1 className="desc-one">Your Adventure Awaits</h1>
        <h1 className="desc-two">
          Acme Outdoors has everything you need to help you get started today.
          Check out our wonderful collection of gear that will make your next
          adventure complete.
        </h1>
        <Link className="desc shop-btn" to="/shop">
          Shop Merch
        </Link>
      </div>
    </div>
  );
}
