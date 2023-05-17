import { Text, View } from "react-native";

const Paragraph = ({
  children,
  textColor = "text-turquoise-700",
  className,
  ...props
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{ fontFamily: "Mulish-medium", flex: 1, flexWrap: "wrap" }}
        className={`text-base ${textColor} ${className}`}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
};

export default Paragraph;
