import { View } from "react-native";

const Card = ({ children, className, ...props }) => (
  <View className={`rounded-lg px-4 py-6 ${className}`} {...props}>
    {children}
  </View>
);

export default Card;
