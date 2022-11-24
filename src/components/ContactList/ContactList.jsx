import PropTypes from 'prop-types';

function ContactList(props) {
  const { contacts, contactOnDelete } = props;

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => contactOnDelete(id)} type="button">
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  contactOnDelete: PropTypes.func.isRequired,
};

export default ContactList;

