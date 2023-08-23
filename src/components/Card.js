import React from 'react';

export default function Card(props) {
  return (
    <section className="card">
      <div>
        <img src={`../images/${props.item.coverImg}`} className="card--img" />
      </div>
      <div className="card--right">
        <div className="card--stats">
          <span>
            <img src="./images/location.png" /> {props.item.location}
          </span>
          <span>
            <a href="{props.item.googleMapsUrl}" className="card--map">
              {' '}
              View on Google Maps
            </a>
          </span>
        </div>
        <h3 className="card--title">{props.item.title}</h3>
        <h5 className="card--date">
          {props.item.startDate}- {props.item.endDate}
        </h5>
        <p className="card--detail">{props.item.description}</p>
      </div>
    </section>
  );
}
