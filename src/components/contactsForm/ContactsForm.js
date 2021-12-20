import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  generateContact = (name, number) => {
    return { id: shortid.generate(), name, number };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = this.generateContact(name, number);
    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  // componentDidUpdate = (prevProp, prevState) => {
  //   console.log(prevState.name === this.state.name);
  //   console.log(prevState.number === this.state.number);
  // };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
            placeholder="Enter contact name"
          />

          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
