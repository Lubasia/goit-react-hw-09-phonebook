import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 900,
    marginRight: 14,
    textTransform: 'uppercase',
    color: 'rgb(232, 74, 95)',
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button variant="outline-success" type="button" onClick={onLogout}>
        Logout{' '}
        <span role="img" aria-label="Иконка телефон">
          🏃‍♀️/🏃
        </span>
      </Button>
    </div>
  );
}
