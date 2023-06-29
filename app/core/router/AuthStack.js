import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import ResetPassword from '../../screens/auth/ResetPassword';

export default function AuthStack() {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
}
