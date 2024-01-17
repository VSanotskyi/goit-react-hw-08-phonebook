import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { regThunk } from 'store/auth';
import css from '../form.module.css';

const initState = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initState);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(regThunk(user));
    setUser(initState);
  };

  return (
    <form className={css.form}
          onSubmit={handleSubmit}
    >
      <h3>Registration</h3>
      <label className={css.label}>
        Name
        <input type="text"
               name="name"
               value={user.name}
               onChange={handleChange}
               required
        />
      </label>
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
      <button type="submit">Registration</button>
    </form>
  );
};

export { RegistrationForm };
