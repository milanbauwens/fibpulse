import { useAuthContext } from "../components/Auth/AuthProvider.js";

// Stacks
import AuthStack from "./stacks/AuthStack";
import AppStack from "./stacks/AppStack.jsx";

const AppContent = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return <AppStack />;
};

export default AppContent;
