import { LoginForm, Section } from 'components';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../store/auth';
import SignIn from '../components/SigIn/SigIn';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSigIn = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <Section>
      <SignIn handleSigIn={handleSigIn} />
      {/*<LoginForm />*/}
    </Section>
  );
};

