import React,{ useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
function deleteContact(id){
actions.delContact(id)
};
console.log(store)
  return (
    <div className="card mb-3" style={{ width: "840px", height: "200px" }}>
      <div className="row no-gutters">
        <div className="col-4">
          <img className="pic" src="https://image.shutterstock.com/image-photo/composition-male-rugby-team-playing-600w-1998491993.jpg" alt="Boy play soccer" />
        </div>
        <div className="col-4">
          <div className="card-body">
            <h5 className="card-title">{props.contact.full_name}</h5>
            <div>
              <div className="icons row col-md-6 ">
                <div className="col-4">
                <Link to={`/edit/${props.contact.id}`}><button className="edit"><i className="fa-solid fa-user-pen"></i></button></Link>
                </div>
                <div className="col-4">
                <button onClick={() => deleteContact(props.contact.id)} className="trash"><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
            <p className="card-text"><i className="fa-solid fa-location-dot"></i> {props.contact.address}</p>
            <p className="card-text"><i className="fa-solid fa-phone"></i> {props.contact.phone}</p>
            <p className="card-text"><i className="fa-solid fa-envelope"></i> {props.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
