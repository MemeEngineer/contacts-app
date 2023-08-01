
import ContactItem from '../ContactItem'
function ContactsList(props){
const {contacts} = props
    return(
        <div>
            <h2>Contacts List</h2>

            <>
            {contacts ? (
                contacts.map((contact) => <ContactItem key={contact.id} contact={contact}/>)
            ) : (<h3>No Contacts found</h3>
            )}
            
            </>
        </div>
    )
}

export default ContactsList;