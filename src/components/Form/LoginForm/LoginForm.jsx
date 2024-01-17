import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginThunk } from 'store/auth';
import css from '../form.module.css';

const initState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initState);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk(user));
    setUser(initState);
  };

  return (
    <form className={css.form}
          onSubmit={handleSubmit}
    >
      <h3>Log in</h3>
      <label className={css.label}>
        Email
        <input type="email"
               name="email"
               value={user.email}
               onChange={handleChange}
               required
        />
      </label>
      <label className={css.label}>
        Password
        <input type="password"
               name="password"
               value={user.password}
               onChange={handleChange}
               required
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export { LoginForm };
