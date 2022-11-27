import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEnvelope,
  faDollarSign,
  faAddressBook,
  faPhoneFlip,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import CardWrapper from "./components/CardWrapper";
import freelancer1 from "./assets/img/freelancer-1.jpg";

function App(props) {
  const freelancer = [
    {
      id: 0,
      title: "MR",
      lastName: "ROBERTS",
      role: "UI/UX Designer",
      fee: 85,
      reviews: 105,
    },
  ];

  return (
    <div className="card-container">
      <CardWrapper>
        <div className="img-container">
          <div className="img-wrapper">
            <img src={freelancer1} alt="freelancer-one" />
            <span className="dot"></span>
          </div>
        </div>
        <div className="info-container">
          <h3>MR.ROBERTS</h3>
          <p>UI/UX Designer</p>
          <div className="hire">
            <div>
              Rate: <span className="price">$85/hr</span>
            </div>
            <button className="hire-button">Hire Me</button>
          </div>
          <div className="rating">
            <div>5.0</div>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>(105 Reviews)</div>
          </div>
          <div className="icons">
            <div className="verified">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span>Verified</span>
            </div>
            <span className="circle available">
              <FontAwesomeIcon icon={faDollarSign} />
            </span>
            <span className="circle available">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="circle  not-available">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <span className="circle  not-available">
              <FontAwesomeIcon icon={faPhoneFlip} />
            </span>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export default App;
