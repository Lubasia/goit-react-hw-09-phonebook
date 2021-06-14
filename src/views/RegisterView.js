import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const onRegister = useCallback(
    e => dispatch(authOperations.register(e)),
    [dispatch],
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

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
