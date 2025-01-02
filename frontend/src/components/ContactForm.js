import {useState} from "react"

export default function ContactForm () {
    const [error, setError] = useState(null)

    async function handleSubmit(formData) {
        const name = formData.get("name")
        const phone = formData.get("phone")
        const address = formData.get("address")
        const contact = {name, phone, address}

        console.log(name)
        console.log(contact)

        const response = await fetch('/api/contacts', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(contact)})
        const result = await response.json()
        console.log(response)
        if(!response.ok) {
            setError(result.error)
            console.log(error)
        } else {
            setError(null)
            console.log("SUCCESS", result)
        }
    }

    return (
        <form className="contact-form" action={handleSubmit}>
            <h3>Add a New Contact</h3>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Enter name"/>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" name="phone" placeholder="Enter phone"/>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" name="address" placeholder="Enter address"/>
            <button className="add-button">Add Contact</button>
            {error && <div className="error">{error}</div>}
      </form>
    )
}