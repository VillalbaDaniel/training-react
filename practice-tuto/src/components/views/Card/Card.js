import "./Card.css";

import "./Card.css";

const Card = (props) => {
  const description = props.info.description;
  let newDescription =
    description.charAt(0).toUpperCase() + description.substring(1);

  return (
    <div className="cardWrapper">
      <div className="card-title">{props.info.title}</div>
      <div className="card-content">{newDescription}</div>
      <div className="card-footer">
        <a href="">Profile</a>
        <a href="">Friends</a>
      </div>
    </div>
  );
};

export default Card;
