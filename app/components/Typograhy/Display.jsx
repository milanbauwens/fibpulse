import { Text } from "react-native";

const Display = ({ children, centered, props }) => {
  return (
    <Text
      style={{ fontFamily: "Bitter-semibold" }}
      className={`text-[28px] leading-[42px] text-deepMarine-900 mb-2 ${
        centered && "text-center"
      }`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Display;
