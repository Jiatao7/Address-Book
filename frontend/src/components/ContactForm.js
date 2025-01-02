import {useState} from "react"
import { useContactsContext } from "../context/ContactsContext"

export default function ContactForm () {
    const [error, setError] = useState(null)
    const {dispatch} = useContactsContext()

    async function handleSubmit(formData) {
        const name = formData.get("name")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const address = formData.get("address")
        const contact = {name, phone, email, address}

        const response = await fetch('/api/contacts', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(contact)})
        const result = await response.json()
        //console.log(response)
        if(!response.ok) {
            setError(result.error)
            console.log(error)
        } else {
            setError(null)
            console.log("SUCCESS", result)
            dispatch({type: "CREATE", payload: result})
        }
    }

    return (
        <form className="contact-form" action={handleSubmit}>
            <h3>Add a New Contact</h3>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" autoComplete="on" name="name" placeholder="Enter name"/>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" autoComplete="on" name="phone" placeholder="Enter phone"/>
            <label htmlFor="address">Email</label>
            <input id="email" type="text" autoComplete="on" name="email" placeholder="Enter email"/>
            <label htmlFor="email">Address</label>
            <input id="address" type="text" autoComplete="on" name="address" placeholder="Enter address"/>
            <button className="add-button">Add Contact</button>
            {error && <div className="error">{error}</div>}
      </form>
    )
}