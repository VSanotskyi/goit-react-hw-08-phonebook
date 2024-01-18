import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';

import { Section, SignIn } from 'components';
import { loginThunk } from 'store/auth';
import { useAuth } from 'hooks';
import { useState } from 'react';

export default function LoginPage() {
  const [isErr, setIsErr] = useState(false);
  const dispatch = useDispatch();
  const { authError } = useAuth(setIsErr);

  const handleSigIn = (data) => {
    dispatch(loginThunk(data));
    if (authError) {
      setIsErr(true);
      setTimeout(() => {
        setIsErr(false);
      }, 2000);
    }
  };

  return (
    <Section>
      {isErr &&
        <Alert severity="error">This is an error Alert.</Alert>}
      <SignIn handleSigIn={handleSigIn} />
      {/*<LoginForm />*/}
    </Section>
  );
};

