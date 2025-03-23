import { useContactsContext } from "../context/ContactsContext"

export default function ContactBox (props) {
    const {dispatch} = useContactsContext()

    const handleClick = async () => {
        const response = await fetch(`https://${process.env.REACT_APP_API_URL}/api/contacts/${props.contact._id}`, {method: "DELETE"})
        const contact = await response.json()

        if(response.ok) {
            dispatch({type: "DELETE", payload: contact._id})
        }
    }

    return (
        <div className="contact-box">
            <h4>{props.contact.name}</h4>
            <p>{props.contact.phone && `Phone: ${props.contact.phone}`}</p>
            <p>{props.contact.email && `Email: ${props.contact.email}`}</p>
            <p>{props.contact.address && `Address: ${props.contact.address}`}</p>
            <span className="delete-button" onClick={handleClick}>Delete</span>
        </div>
    )
}