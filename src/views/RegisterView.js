import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = { name: '', email: '', password: '' };

export default function RegisterView() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const { name, email, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register(user));
      setUser(initialState);
    },
    [dispatch, user],
  );

  return (
    <div>
      <h1>Страница регистрации</h1>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Form.Group controlId="formBasicName"></Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Введите имя"
        />
        <Form.Group controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Введите почту"
          />
          <Form.Text className="text-muted">
            Мы никогда не делимся вашими данными с кем бы то ни было.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Пароль, минимум 10 знаков"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1>Страница регистрации</h1>
//         <Form onSubmit={this.handleSubmit} autoComplete="on">
//           <Form.Group controlId="formBasicName"></Form.Group>
//           <Form.Label></Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             placeholder="Введите имя"
//           />
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//               placeholder="Введите почту"
//             />
//             <Form.Text className="text-muted">
//               Мы никогда не делимся вашими данными с кем бы то ни было.
//             </Form.Text>
//           </Form.Group>
//           <Form.Group controlId="formBasicPassword">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               placeholder="Пароль, минимум 10 знаков"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Зарегистрироваться
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
