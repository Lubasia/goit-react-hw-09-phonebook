/* eslint-disable import/no-anonymous-default-export */
import actions from './phoneBook-actions';
import api from '../../service/phoneBook-api';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const { data } = await api.fetchContacts();
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(alert(error.message)));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());
  try {
    const { data } = await api.addContact(contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(alert(error.message)));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await api.deleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(alert(error.message)));
  }
};

export default { fetchContacts, addContact, deleteContact };
