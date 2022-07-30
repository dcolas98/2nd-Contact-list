import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
    let { id } = useParams();
    
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
                        value={id.full_name}
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
                        value={id.email}
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
                        value={id.phone}
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
                        value={id.address}
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        onChange={(event) => {
                            setContact({ ...contact, address: event.target.value })
                        }}

                    ></input>
                </section>
            </div>
        </div>
    )
}

export default Edit