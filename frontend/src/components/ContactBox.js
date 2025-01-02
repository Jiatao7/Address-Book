import { useContactsContext } from "../context/ContactsContext"

export default function ContactBox (props) {
    const {dispatch} = useContactsContext()

    const handleClick = async () => {
        const response = await fetch('/api/contacts/' + props.contact._id, {method: "DELETE"})
        const contact = await response.json()
        console.log(contact)
        dispatch({type: "DELETE", payload: contact._id})
    }

    return (
        <div className="contact-box">
            <h4>{props.contact.name}</h4>
            <p>{props.contact.phone}</p>
            <p>{props.contact.address}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}