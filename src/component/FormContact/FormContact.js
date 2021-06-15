import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = { name: '', number: '' };

export default function FormContact() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialState);
  const { name, number } = user;

  const contacts = useSelector(phoneBookSelectors.getAllContacts);

  const onAddContact = useCallback(
    (name, number) => dispatch(phoneBookOperations.addContact(name, number)),
    [dispatch],
  );

  const reset = () => {
    setUser(initialState);
  };

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert('Этот контакт уже существует');
      reset();
      return;
    }

    onAddContact(name, number);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicNumber">
        <Form.Label>Номер</Form.Label>
        <Form.Control
          type="text"
          name="number"
          value={number}
          onChange={handleChangeInput}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить контакт{' '}
        <span role="img" aria-label="Иконка done">
          ✅{' '}
        </span>
      </Button>
    </Form>
  );
}
