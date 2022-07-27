import React, { useContext } from "react";
import {ContactCard} from "../component/ContactCard.jsx";
import { Context } from "../store/appContext";

export const ContactList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.data.map((item, index) => {
        return <ContactCard key={index} contact={item} />;
      })}
    </div>
  );
};
