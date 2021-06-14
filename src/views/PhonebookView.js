import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { phoneBookOperations, phoneBookSelectors } from '../redux/phoneBook';

import ContactList from '../component/ContactList';
import FormContact from '../component/FormContact';
import Filter from '../component/Filter';
import Loader from '../component/Loader';

export default function PhonebookView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(phoneBookSelectors.getAllContacts);
  const isLoading = useSelector(phoneBookSelectors.getLoading);

  return (
    <div>
      {isLoading && <Loader />}
      <h1>
        {' '}
        Phonebook{' '}
        <span role="img" aria-label="Иконка телефон">
          ☎️
        </span>
      </h1>
      <FormContact />
      {isLoading && <Loader />}

      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 && <ContactList />}
      {contacts.length === 0 && (
        <h3>
          {' '}
          No Contacts{' '}
          <span role="img" aria-label="Иконка грусти">
            🙁
          </span>
        </h3>
      )}
    </div>
  );
}
