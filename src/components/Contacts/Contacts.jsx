import React from 'react';
import {Title, Section, Container, Message} from './Contacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';


import { ContactList } from '../ContactList/ContactList';

export function Contacts() {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);

    const filtredList = () => {
        return filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : '';
    };

    return <Container>
        <Section>
            <Title>Phonebook</Title>
            <ContactForm />
        </Section>
        <Section>
            <Title>Contacts</Title>
            <Filter />

            {(filter && (filtredList().length !== 0 
            ? <ContactList contacts={filtredList()}  />
            : <Message>Сontact was not found</Message>)) ||
            (contacts.length === 0 ? <Message>You don't have any contact</Message>
            : <ContactList contacts={contacts} />)
            }
        </Section>
    </Container>
        
};