import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';

import { Section, SignIn } from 'components';
import { loginThunk } from 'store/auth';
import { useAuth } from 'hooks';
import { useState } from 'react';

export default function LoginPage() {
  const [isShowError, setIsShowError] = useState(false);
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const handleSigIn = (data) => {
    if (authError) {
      setIsShowError(true);
      setTimeout(() => {
        setIsShowError(false);
      }, 2000);
    }

    dispatch(loginThunk(data));
  };

  return (
    <Section>
      {isShowError &&
        <Alert severity="error">
          Error! User not found or incorrect password</Alert>}
      <SignIn handleSigIn={handleSigIn} />
      {/*<LoginForm />*/}
    </Section>
  );
};

