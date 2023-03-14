import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import { deleteUser } from './features/ContactSlice'
//import View from './View'

function Home() {
    const dispatch = useDispatch()
    //const navigate = useNavigate()
    const { contacts } = useSelector((state) => state.contact)
    console.log(contacts)
    const onDeleteContact = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <div>
            <Link to="/addContact">
                <button >Add Contact</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((elem,index) => (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>{elem.phone}</td>
                            <td>{elem.status}</td>
                            <td>
                                <Link to={`/update/${elem.id}`}>
                                    <button >Edit</button>
                                </Link>
                                <button
                                    onClick={() => onDeleteContact(elem.id)}
                                >
                                    Delete
                                </button>
                                <Link to={`/view/${index}`}>
                                    <button>View</button>
                                </Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home