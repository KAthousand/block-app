import React from "react";
import Button from "../Shared/Button/Button";
import localGov from "../../assets/icons/localGov.svg";
import businesses from "../../assets/icons/businesses.svg";
import hotline from "../../assets/icons/hotline.svg";
import buildings from "../../assets/icons/buildings.svg";
import construction from "../../assets/icons/construction.svg";
import event from "../../assets/icons/event.svg";
import { Link } from "react-router-dom";

function ContentCard(props) {
  return (
    <div className={props.cardType === true ? "resources" : "community"}>
      <h2>{props.cardType === true ? "Resources" : "Community"}</h2>
      <h3>
        {props.cardType === true
          ? "Your Voice matters, heres where you can use it."
          : "Stay involved in your neighborhood."}
      </h3>
      <div className="button-container">
        <div className="button">
          <Link to="/">
            <Button
              buttonType={props.cardType === true ? localGov : businesses}
              buttonTitle={
                props.cardType === true ? "Local Government" : "Businesses"
              }
            />
          </Link>
          <p>
            {props.cardType === true
              ? "Learn more about and contact your local representatives"
              : "Support and learn more about local businesses"}
          </p>
        </div>
        <div className="button">
          <Link to="/">
            <Button
              buttonType={props.cardType === true ? hotline : buildings}
              buttonTitle={props.cardType === true ? "Hotline" : "Brooklyn"}
            />
          </Link>
          <p>
            {props.cardType === true
              ? "From concerns to emergencies, Hotline is here to help"
              : "Explore the streets, the history, and culture in your neighborhood"}
          </p>
        </div>
        <div className="button">
          <Link to="/">
            <Button
              buttonType={props.cardType === true ? construction : event}
              buttonTitle={props.cardType === true ? "Construction" : "Events"}
            />
          </Link>
          <p>
            {props.cardType === true
              ? "Stay updated on the current and upcoming construction"
              : "Participate in what's happening in your community"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
