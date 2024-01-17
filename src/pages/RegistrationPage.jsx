import { Section } from 'components';
import SignUp from 'components/SignUp/SignUp';
import { useDispatch } from 'react-redux';
import { regThunk } from 'store/auth';

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const handleSignUp = (data) => {
    dispatch(regThunk(data));
  };

  return (
    <Section>
      {/*<RegistrationForm />*/}
      <SignUp handleSignUp={handleSignUp} />
    </Section>
  );
};


