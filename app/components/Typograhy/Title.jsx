import { Text } from "react-native";

const Title = ({ children, centered, props }) => (
  <Text
    style={{ fontFamily: "Bitter-semibold" }}
    className={`text-2xl text-deepMarine-900 mb-2 ${centered && "text-center"}`}
    {...props}
  >
    {children}
  </Text>
);

export default Title;
