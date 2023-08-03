
import ContactItem from '../ContactItem'
import {useContext} from 'react'
import { ContactsContext } from '../../context/contactsContext'
function ContactsList(props){

const contactsCtx = useContext(ContactsContext)
const {contacts} = contactsCtx
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