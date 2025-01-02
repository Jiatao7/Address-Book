import {useEffect} from "react"
import { useContactsContext } from "../context/ContactsContext"
//const {testData} = require('../testData')

//Components
import ContactBox from '../components/ContactBox'
import ContactForm from '../components/ContactForm'


export default function Home() {
    const {contacts, dispatch} = useContactsContext()
    
    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch('/api/contacts')
            const data = await response.json()

            if(response.ok) {
               dispatch({type: "SET", payload: data})
            }
        }
        fetchContacts()
    }, [])
    
    console.log(contacts)

    return(
        <div className="home">
            <div className="contacts">
                {contacts && contacts.map(contact => 
                    <ContactBox key={contact._id} contact={contact} />
                )}
            </div>
            <ContactForm />
        </div>
    )
}

