import { View } from "react-native";

const Card = ({ children, className, ...props }) => (
  <View className={`rounded-lg shadow-card relative ${className}`} {...props}>
    {children}
  </View>
);

export default Card;
