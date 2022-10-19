import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
    filter: ""
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactAdd: (state, action) => {
          return { ...state, contacts: [...state.contacts, action.payload] };
    },
    contactRemove: (state, action) => {
        return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
    },
    contactFilter: (state, action) => {
        state.filter = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { contactAdd, contactRemove, contactFilter } = contactsSlice.actions

export default contactsSlice.reducer