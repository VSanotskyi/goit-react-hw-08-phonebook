import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { useAuth } from 'hooks';
import { logoutThunk } from 'store/auth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { authUser } = useAuth();

  const handleClick = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.wrapper}>
      <Avatar src="/broken-image.jpg" />
      <p className={css.username}>Welcome, {authUser.name}</p>
      <Button variant="contained"
              onClick={handleClick}
      >Sign out</Button>
    </div>
  );
};

export { UserMenu };
