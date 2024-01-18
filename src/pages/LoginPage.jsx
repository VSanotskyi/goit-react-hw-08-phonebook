import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';

import { Section, SignIn } from 'components';
import { loginThunk } from 'store/auth';
import { useAuth } from 'hooks';

export default function LoginPage() {
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const handleSigIn = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <Section>
      {authError && <Alert severity="error">This is an error Alert.</Alert>}
      <SignIn handleSigIn={handleSigIn} />
      {/*<LoginForm />*/}
    </Section>
  );
};

