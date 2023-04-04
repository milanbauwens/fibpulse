import { Text } from "react-native";

const Paragraph = ({
  children,
  textColor = "text-deepMarine-700",
  className,
  ...props
}) => {
  return (
    <Text
      style={{ fontFamily: "Mulish-medium" }}
      className={`text-base ${textColor} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
