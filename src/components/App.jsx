
import { Component } from 'react';

import SectionTitle from './Section/SectionTitle';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

import s from './app.module.css';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onChangeFilterValue = event => {
   

    this.setState({
      filter: event.target.value,
    });
  };
  compareContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase().trim();
   
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };
  addContact = data => {
    const { name } = data;
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} - this contact already in contact list`);
      return;
    } else {
      const contact = { ...data, id: nanoid() };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
   
  };
  render() {
   
    return (
      <div className={s.wrap}>
        <SectionTitle title="Phonebook">
          { }
          <ContactsForm catchSubmitInfo={this.addContact} />
        </SectionTitle>
        <SectionTitle title="Contacts">
          <Filter
            filterValue={this.state.filter}
            catchFilterInfo={this.onChangeFilterValue}
          />
          {this.state.contacts.length ? (
            <ContactList
              contacts={this.compareContacts()}
              contactOnDelete={this.deleteContacts}
            />
          ) : (
            <p>Your phonebook is empty</p>
          )}
        </SectionTitle>
      </div>
    );
  }
}
export default App;
