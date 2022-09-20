import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom"

const Read = () => {
    const [data, setData] = useState([])
    const [tabledark, setTableDark] = useState("")
    function getData() {
        axios
            .get("https://632826ec5731f3db99651cf2.mockapi.io/crud-youtube")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://632826ec5731f3db99651cf2.mockapi.io/crud-youtube/${id}`)
            .then(() => {
                getData();
            })
    }
    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                onClick={()=>{
                    if(tabledark === "table-dark") setTableDark("")
                    else setTableDark("table-dark")
                }}
                />
            </div>
            <div className='d-flex justify-content-between'>
                <h2 className='mt-4'> Read Operation </h2>
                <Link to="/">
                    <button className='btn btn-secondary mt-4'>Create Data</button>
                </Link>
            </div>
            <table className={`table mt-3 ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">Sl. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map((list) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{list.id}</th>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>
                                        <Link to="/update">
                                            <button className='btn-success' onClick={() => { setLocalStorage(list.id, list.name, list.email) }}>Edit</button>
                                        </Link>
                                    </td>
                                    <td><button className='btn-danger' onClick={() => handleDelete(list.id)} >Delete</button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </>
    )
}

export default Read