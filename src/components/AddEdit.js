import React, { useEffect, useState } from 'react'
import { addUser, updateUser, getUser } from './features/ContactSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const initialState = {
    name: '',
    email: '',
    phone: '',
    status: ''
}
function AddEdit() {

    const [state, setState] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { contact } = useSelector((state) => state.contact)
    const { name, email, phone, status } = state

    useEffect(() => {
        dispatch(getUser(id))
        setState({ ...contact })
    }, [id, contact])

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        setState({ ...state, [e.target.name]: e.target.value });

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !status) {
            console.log("Please provide value into each input field");
        } else {
            if (!id) {
                dispatch(addUser(state))
    
            } else {
                dispatch(updateUser(state))
    
            }
        }
        navigate('/')
    }
    const handleDropdownChange = (e) => {
        // const { name, value } = e.target;
        setState({ ...state, [e.target.name]: e.target.value });
    };


    return (

        <form onSubmit={handleSubmit}>
            <input type={'text'} placeholder='Name' name='name' value={name || " "} onChange={handleInputChange} />
            <input type={'text'} placeholder='Email' name='email' value={email || ""} onChange={handleInputChange} />
            <input type={'text'} placeholder='Phone' name='phone' value={phone || ""} onChange={handleInputChange} />
            <select

                name="status"
                value={status}
                onChange={handleDropdownChange}
            >
                <option>Please Select Status</option>
                <option value="Active" selected={status === "Active" ? status : ""}>
                    Active
                </option>
                <option
                    value="Inactive"
                    selected={status === "Inactive" ? status : ""}
                >
                    Inactive
                </option>
            </select>
            <input type="submit" value={id ? 'update' : 'save'} />
            <Link to="/">
                <input type="button" value="Go Back" />
            </Link>
        </form>

    )
}

export default AddEdit