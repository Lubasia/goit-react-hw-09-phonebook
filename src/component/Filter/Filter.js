import { useSelector, useDispatch } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(phoneBookSelectors.getFilter);
  const onChangeFilter = e =>
    dispatch(phoneBookActions.changeFilter(e.currentTarget.value));

  return (
    <div className={styles.container}>
      <label>
        Найти контакт по имени
        <span role="img" aria-label="Иконка поиска">
          🔍{' '}
        </span>
        <Form.Control
          type="text"
          value={value}
          onChange={onChangeFilter}
          name="filter"
        />
      </label>
    </div>
  );
}
