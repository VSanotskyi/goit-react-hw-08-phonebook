import { useDispatch } from 'react-redux';
import { regThunk } from 'store/auth';
import { Alert } from '@mui/material';

import { Section, SignUp } from 'components';
import { useAuth } from 'hooks';
import { useState } from 'react';

export default function RegistrationPage() {
  const [isShowError, setIsShowError] = useState(false);
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const handleSignUp = (data) => {
    dispatch(regThunk(data));
    if (authError) {
      setIsShowError(true);
      setTimeout(() => {
        setIsShowError(false);
      }, 2000);
    }
  };

  return (
    <Section>
      {isShowError &&
        <Alert severity="error">Error! Check all fields and try again</Alert>}
      {/*<RegistrationForm />*/}
      <SignUp handleSignUp={handleSignUp} />
    </Section>
  );
};


