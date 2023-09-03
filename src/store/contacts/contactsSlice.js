import { createSlice } from '@reduxjs/toolkit'
import contacts from '../../contacts.json'
const contactsSlice = createSlice({
    name: "contacts",
    initialState: { contacts },
    reducers: {
        createContact: (state, { payload }) => {
            state.contacts = [payload, ...state.contacts]
        },
            

        deleteContacts: (state, { payload }) => {
            state.contacts = state.contacts.filter(el => el.id !== payload)
        },
    }
})
export const contactsReducer = contactsSlice.reducer;
export const {createContact, deleteContacts} = contactsSlice.actions;