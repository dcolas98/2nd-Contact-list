import React,{ useContext} from "react";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
function deleteContact(id){
actions.delContact(id)
};
console.log(store)
  return (
    <div class="card mb-3" style={{ width: "840px", height: "200px" }}>
      <div class="row no-gutters">
        <div class="col-4">
          <img className="pic" src="https://image.shutterstock.com/image-photo/composition-male-rugby-team-playing-600w-1998491993.jpg" alt="Boy play soccer" />
        </div>
        <div class="col-4">
          <div class="card-body">
            <h5 class="card-title">{props.contact.full_name}</h5>
            <div>
              <div className="icons row col-md-6 ">
                <div className="col-4">
                <button className="trash"><i class="fa-solid fa-user-pen"></i></button>
                </div>
                <div className="col-4">
                <button onClick={() => deleteContact(props.contact.id)} className="edit"><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
            <p class="card-text"><i class="fa-solid fa-location-dot"></i> {props.contact.address}</p>
            <p class="card-text"><i class="fa-solid fa-phone"></i> {props.contact.phone}</p>
            <p class="card-text"><i class="fa-solid fa-envelope"></i> {props.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
