import { useDispatch } from 'react-redux';
import { regThunk } from 'store/auth';
import { Alert } from '@mui/material';

import { Section, SignUp } from 'components';
import { useAuth } from 'hooks';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const handleSignUp = (data) => {
    dispatch(regThunk(data));
  };

  return (
    <Section>
      {authError &&
        <Alert severity="error">Error! Check all fields and try again</Alert>}
      {/*<RegistrationForm />*/}
      <SignUp handleSignUp={handleSignUp} />
    </Section>
  );
};


