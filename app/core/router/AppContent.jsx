// Stacks
import { useAuthContext } from '../../components/auth/AuthProvider';
import AppStack from './stacks/AppStack.jsx';
import AuthStack from './stacks/AuthStack.jsx';

const AppContent = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return <AppStack />;
};

export default AppContent;
