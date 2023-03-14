import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const ContactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: [
            {
                id: 1,
                name: "Mayank Kumar",
                email: "mayankkumar@gmail.com",
                phone: "+91767656526",
                status: "Active",
            },
            {
                id: 2,
                name: "Jitender Kumar",
                email: "jitenderskumar@gmail.com",
                phone: "+918878446746",
                status: "Inactive",
            },
            {
                id: 3,
                name: "James Gun",
                email: "jamesgun@gmail.com",
                phone: "+919768446746",
                status: "Active",
            },
            {
                id: 4,
                name: "James Bond",
                email: "jamesbind@gmail.com",
                phone: "+917768446746",
                status: "Inactive",
            },
        ],
        filter: 'null',
        contact: {
            name: '',
            email: '',
            phone: '',
            status: ''
        }
    },
    reducers: {
        getUser: (state, action) => {
            state.contact = state.contacts.find((elem) => elem.id == action.payload)
        },
        addUser: (state, action) => {
            const newData = { ...action.payload, id: uuidv4() }
            state.contacts = [newData, ...state.contacts]
        },
        deleteUser: (state, action) => {
            state.contacts = state.contacts.filter((elem) => elem.id !== action.payload)
        },
        updateUser: (state, action) => {
            state.contacts = state.contacts.map((elem) =>
                elem.id === action.payload.id ? action.payload : elem)
        }

    }
})
export const { addUser, deleteUser ,getUser,updateUser} = ContactSlice.actions
export default ContactSlice.reducer;