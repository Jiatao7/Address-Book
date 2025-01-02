import React from "react"

export const ContactsContext = React.createContext()

export const useContactsContext = () => {
    const context = React.useContext(ContactsContext)
    if(!context) {
        throw Error('Error')
    }
    return context
}

const ContactsReducer = (state, action) => {
    switch(action.type) {
        case "SET":
            return {contacts: action.payload}   //payload is array of contacts
        case "CREATE":
            return {contacts: [action.payload, ...state.contacts]}   //payload is new contact
            //sort
        default:
            return state
    }
}

export const ContactContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(ContactsReducer, {contacts: null})

    return (
        <ContactsContext.Provider value={{...state, dispatch}}>
            {children}
        </ContactsContext.Provider>
    )
}