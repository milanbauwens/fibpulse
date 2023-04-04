import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { Switch, View } from "react-native";
import Paragraph from "../Typograhy/Paragraph";
import { useState } from "react";

const SettingsItem = ({
  type = "normal" || "error",
  title,
  iconName,
  onPress,
  withToggle,
  toggleState,
}) => {
  const [isEnabled, setIsEnabled] = useState(toggleState);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      onPress={onPress}
      className="w-full flex flex-row items-center justify-between mb-6"
    >
      <View className="flex flex-row items-center">
        <View
          className={`w-8 h-8 mr-4 flex items-center justify-center ${
            type === "error" ? "bg-red-100" : " bg-turquoise-200"
          } rounded-full`}
        >
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={type === "error" ? colors.red[600] : colors.turquoise[700]}
          />
        </View>
        <Paragraph
          textColor={type === "error" ? "text-red-600" : "text-deepMarine-900"}
        >
          {title}
        </Paragraph>
      </View>
      {withToggle ? (
        <Switch
          trackColor={{
            false: colors.ochre[500],
            true: colors.ochre[500],
          }}
          thumbColor="#FFF"
          ios_backgroundColor={colors.deepMarine[100]}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={type === "error" ? colors.red[600] : colors.deepMarine[700]}
        />
      )}
    </View>
  );
};

export default SettingsItem;
