import { useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoading,
  selectIsLog,
  selectIsRefresh, selectToken,
  selectUser,
} from 'store/auth';

export const useAuth = () => {
  const authToken = useSelector(selectToken);
  const authUser = useSelector(selectUser);
  const authIsLog = useSelector(selectIsLog);
  const authIsRefresh = useSelector(selectIsRefresh);
  const authIsLoading = useSelector(selectIsLoading);
  const authError = useSelector(selectError);

  return {
    authUser,
    authIsLog,
    authIsRefresh,
    authIsLoading,
    authError,
    authToken,
  };
};

