import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks';
import { currentThunk } from 'store/auth';

const Layout = lazy(() => import('components/Layout/Layout'));
const PrivateRoute = lazy(() => import('components/PrivateRoute'));
const RestrictedRoute = lazy(() => import('components/RestrictedRoute'));

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  const { authToken, authIsLog } = useAuth();

  useEffect(() => {
    authToken && !authIsLog && dispatch(currentThunk());
  }, [dispatch, authToken, authIsLog]);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/"
               element={<Layout />}
        >
          <Route index
                 element={<RestrictedRoute component={<HomePage />}
                                           redirectTo="/contacts"
                 />}
          />
          <Route path="/login"
                 element={<RestrictedRoute component={<LoginPage />}
                                           redirectTo="/contacts"
                 />}
          />
          <Route path="/registration"
                 element={<RestrictedRoute component={<RegistrationPage />}
                                           redirectTo="/contacts"
                 />}
          />
          <Route path="/contacts"
                 element={<PrivateRoute component={<ContactsPage />}
                                        redirectTo="/"
                 />}
          />
        </Route>
        <Route path="*"
               element={<ErrorPage />}
        />
      </Routes>
    </Suspense>
  );
};

export { App };
