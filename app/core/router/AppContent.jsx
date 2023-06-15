// Stacks
import { useAuthContext } from '../../components/auth/AuthProvider';
import AppStack from '../router/stacks/AppStack';
import AuthStack from '../router/stacks/AuthStack';

const AppContent = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return <AppStack />;
};

export default AppContent;
