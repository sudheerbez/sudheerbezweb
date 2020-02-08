import React, { Component } from "react";
import "./EventTemplate.scss";

class EventTemplate extends Component {
  render() {
    if (!this.props || !this.props.event) {
      return <></>;
    }
    return (
      <section
        className={`meetup  ${this.props.className && this.props.className}`}
        key={this.props.event.title}
      >
        <h2 className="meetup-title">{this.props.event.title}</h2>
        <div className="meetup-meta">
          <p className="meetup-metaField  meetup-metaField--date">
            <span className="meetup-label">Date:</span> {this.props.event.formattedDate}
          </p>
          <p className="meetup-metaField  meetup-metaField--location">
            <span className="meetup-label">Location:</span> {this.props.event.location.name}
          </p>
        </div>
        <div className="meetup-presenters">
            <span className="meetup-presenterText">{this.props.event.presenters[0].text}</span>
        </div>
      </section>
    );
  }
}



export default EventTemplate;
