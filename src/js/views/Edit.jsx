import React, {useState, useContext, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Context } from "../store/appContext";

const Edit = (props) => {
    let { id } = useParams();
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        full_name: "",
        address: "",
        phone: "",
        email: "",
        agenda_slug: "class_agenda",
    });
    const myContact = store.data && store.data.filter((contact)=> contact.id === id)[0]
    useEffect(()=> {
        if(myContact){
            setContact(myContact)
        }    
    },[myContact])
    const history = useHistory()
    return (
        <div>
            <div>
                <h2>Edit exsiting contact at id: {id} </h2>
            </div>
            <div>
                <section>
                    <div>Full Name</div>
                    <input

                        type="text"
                        value={contact.full_name}
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        onChange={(event) => {
                            setContact({ ...contact, full_name: event.target.value })
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
                        onChange={(event) => {
                            setContact({ ...contact, email: event.target.value })
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
                        onChange={(event) => {
                            setContact({ ...contact, phone: event.target.value })
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
                        onChange={(event) => {
                            setContact({ ...contact, address: event.target.value })
                        }}

                    ></input>
                </section>
                <button onClick={()=> {
                    if(contact !== ""){
                        actions.editContact(contact)
                        history.push("/")
                    }
                    }}> Submit </button>

            </div>
        </div>
    )
}

export default Edit