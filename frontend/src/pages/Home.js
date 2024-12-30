import {useEffect, useState} from "react"
//const {testData} = require('../testData')

//Components
import ContactBox from '../components/ContactBox'

export default function Home() {
    const [contacts, setContacts] = useState(null)

    
    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch('/api/contacts')
            const data = await response.json()

            if(response.ok) {
                setContacts(data)
            }
        }
        fetchContacts()
    }, [])
    

    return(
        <div className="home">
            <div className="contacts">
                {contacts && contacts.map(contact => 
                    <ContactBox key={contact._id} contact={contact} />
                )}
            </div>
        </div>
    )
}

