import React from "react";

export const ContactCard = (props) => {
  
  return (
    <div>
      <h3>{props.contact.full_name}</h3>
      <div className="ape d-flex flex-column bd-highlight mb-3 border border-secondary">
      <span>{props.contact.address}</span>
      <span>{props.contact.phone}</span>
      <span>{props.contact.email}</span>
      </div>
    </div>
  );
};
