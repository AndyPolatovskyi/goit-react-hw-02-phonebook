import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';


class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleInputChange = event => {
    const { name, value } = event.currentTarget.value;
    this.setState({ [name]: value });
  }; 

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form} >
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hendleInputChange}
          />
        </label>
        
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hendleInputChange}
          />
        </label>

        <button className={css.buttonSubmit} type='submit'>Add contact</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactsForm;
