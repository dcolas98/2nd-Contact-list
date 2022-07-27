import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import {Link,useHistory,} from "react-router-dom"
export const Home = () => {
  let history=useHistory();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
  });
  console.log(contact)
  const handleSubmit = (event) => {
      event.preventDefault();
      actions.addContact(contact)
      history.push(`/`);
  }
  return (
    <form onSubmit={ handleSubmit}>
      <h1 className="title">Add a new contact</h1>
      <section>
        <div>Full Name</div>
        <input

          type="text"
          value={contact.full_name}
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,full_name:event.target.value})
          }}
          
        ></input>
      </section>
      <section>
        <div>Email</div>
        <input
          type="text"
          value={contact.email}
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,email:event.target.value})
          }}
    
          
        ></input>
      </section>
      <section>
        <div>Phone Number</div>
        <input
          type="text"
          value={contact.phone}
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,phone:event.target.value})
          }}
        
        ></input>
      </section>
      <section className="bottom">
        <div>Address</div>
        <input
          type="text"
          value={contact.address}
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(event)=>{
            setContact({...contact,address:event.target.value})
          }}
         
        ></input>
      </section>

      <button 
      onClick={(event)=>{
        if(contact!=="") {
          event.preventDefault();
          actions.addContact(contact)
          history.push(`/`);

           }
           
         

      }}
      className="btn btn-primary m-2 col-12 m-auto" type="button">
        save
      </button>
      <Link to="https://3000-4geeksacade-reacthellow-w2hzmjdp7yt.ws-us54.gitpod.io/contact" href="#" className="mx-2 link-primary">
          or get back to contacts{" "}
        </Link>
    </form>
  );
};

