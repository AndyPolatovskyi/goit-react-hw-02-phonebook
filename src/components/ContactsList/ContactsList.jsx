import React from 'react';
import PropTypes from "prop-types";
import css from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
              {contact.name}: {contact.number}
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactsList;
