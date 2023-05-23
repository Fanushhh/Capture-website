import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPaperclip,
  faMoneyBill,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon size="2x" icon={faClock} />
            <p>Fast</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon size="2x" icon={faPaperclip} />
            <p>Efficient</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon size="2x" icon={faMoneyBill} />
            <p>Cost effective</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon size="2x" icon={faPeopleGroup} />
            <p>Eternal support</p>
          </div>
        </div>
      </div>
    </div>
  );
};
