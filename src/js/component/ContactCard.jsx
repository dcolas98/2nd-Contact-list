import React from "react";

export const ContactCard = (props) => {

  return (

    <div className="wholeDiv d-flex flex-row border border-secondary justify-content-between ">
      <div>
        <img className="pic" src="https://image.shutterstock.com/image-photo/composition-male-rugby-team-playing-600w-1998491993.jpg" />
      </div>
      <div className="words d-flex flex-column">
        <h3>{props.contact.full_name}</h3>
        <span>{props.contact.address}</span>
        <span>{props.contact.phone}</span>
        {props.contact.email}
      </div>
      <div className="icons">
          <span><i class="fa-solid fa-user-pen"></i></span>
          <span><i class="fa-solid fa-trash"></i></span>
      </div>
    </div>
  );
};
