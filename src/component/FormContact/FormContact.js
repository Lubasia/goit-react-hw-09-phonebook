import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormContact() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contact = useSelector(phoneBookSelectors.getAllContacts);

  const onAddContact = useCallback(
    (name, number) => dispatch(phoneBookOperations.addContact(name, number)),
    [dispatch],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (contact.some(contact => contact.name === name)) {
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
