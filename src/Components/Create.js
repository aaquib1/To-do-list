import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://632826ec5731f3db99651cf2.mockapi.io/crud-youtube', {
            name: name, email: email,
        })
            .then(() => {
                history('/read')
            })
    }
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h2 className='mt-4'> Create</h2>
                <Link to="/read">
                    <button className='btn btn-primary mt-4'>Show Data</button>
                </Link>
            </div>
            <form >
                <div className="mb-3 mt-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Create