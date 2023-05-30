import { useAuthContext } from "../../components/auth/AuthProvider";

// Stacks
import AuthStack from "./stacks/AuthStack.jsx";
import AppStack from "./stacks/AppStack.jsx";

const AppContent = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return <AppStack />;
};

export default AppContent;
