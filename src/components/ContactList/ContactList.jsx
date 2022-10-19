import PropTypes from 'prop-types';
import { Item, Button, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { contactRemove } from 'redux/contactsSlice';

export function ContactList({contacts}) {
    const dispatch = useDispatch();
   
    const removeContact = (e) => {
        const deletedContact = e.target.id;
        dispatch(contactRemove(deletedContact));
    };

    return (<List>{contacts.map(contact => <Item key={contact.id}>{contact.name}: {contact.number}
        <Button id={contact.id} onClick={removeContact}>Delete</Button></Item>)}</List>
        );
};
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
};