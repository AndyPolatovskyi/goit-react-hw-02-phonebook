import React, { Component } from "react";
// import { nanoid } from "nanoid";
import shortid from "shortid";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import css from "./App.module.css";



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const haveContact = contacts.some(contact => contact.name === name)
    if (haveContact) {
      return alert(`${name} is already in contacts.`)
    };

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    };
  

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  }

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContact()
    
   
    return (
      <section className={css.container}>
        <h1 className={css.titlePhon}>Phonebook</h1>
        <ContactsForm onSubmit={this.addContact} contacts={contacts} />
        <h2 className={css.titleCont}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </section>
    )
  }

};


