import { Link } from 'react-router-dom';

import { Section } from 'components';

export default function ErrorPage() {
  return (
    <Section title="Error, page not defined :(">
      <Link to="./"
            underline="hover"
            color="#1976d2"
      >Go home
      </Link>
    </Section>
  );
};

