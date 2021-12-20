import { GlobalStyle } from './styles/GlobalStyles';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes/index';
import Container from './components/container/Container';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import ContactsForm from './components/contactsForm/ContactsForm';
// import shortid from 'shortid';
import ContatctsList from './components/contatctsList/ContatctsList';
import EmptyContactsNotify from './components/notify/EmptyContactsNotify';

export default class App extends Component {
  state = {
    title: 'dark',
    contacts: [],
  };

  handleThemeSwitch = () => {
    this.setState(({ title }) => ({
      title: title === 'light' ? 'dark' : 'light',
    }));
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  // componentDidUpdate = (prevProp, prevState) => {
  //   console.log(prevState.contacts === this.state.contacts);
  // };

  render() {
    const { title, contacts } = this.state;
    return (
      <>
        <ThemeProvider theme={themes[title]}>
          <GlobalStyle />
          <Container>
            <ThemeSwitcher
              onBtnClick={this.handleThemeSwitch}
              currentTheme={title}
            />
            <ContactsForm addContact={this.addContact} />
            {contacts.length ? (
              <ContatctsList contacts={contacts} />
            ) : (
              <EmptyContactsNotify />
            )}
          </Container>
        </ThemeProvider>
      </>
    );
  }
}
