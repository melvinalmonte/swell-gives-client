import React from "react";

const Cards = ({
  recipient,
  location,
  itemRequested,
  itemAmount,
  amountFulfilled,
  amountPercentage,
  image_link
}) => {
  return (
    <div className="card swell-card-main">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image_link} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {itemAmount} {itemRequested}
            </p>
            <p className="subtitle is-6">for {recipient}</p>
          </div>
        </div>

        <div className="content">
          <a href="#">{location}</a>
          <br />
          <p>{amountFulfilled} amount fulfilled</p>
          <progress
            className="progress is-link"
            value={amountPercentage}
            max="100"
          >
            {console.log("PERCENTAGE: ", amountPercentage)} {amountPercentage}%
          </progress>
        </div>
        <div className="swell-card-donate">
          <button className="button is-link is-outlined">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
