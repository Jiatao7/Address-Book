export default function ContactBox (props) {
    return (
        <div className="contact-box">
            <h4>{props.contact.name}</h4>
            <p>{props.contact.phone}</p>
            <p>{props.contact.address}</p>
        </div>
    )
}