import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

export default function RestrictedRoute({
                                          component: Component,
                                          redirectTo = '/',
                                        }) {
  const { authIsLog } = useAuth();

  return authIsLog ? <Navigate to={redirectTo} /> : Component;
};


