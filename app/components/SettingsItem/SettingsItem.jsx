import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { Switch, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const SettingsItem = ({
  type = "normal" || "error",
  title,
  iconName,
  onPress,
  withToggle = false,
  toggleState,
}) => {
  const [isEnabled, setIsEnabled] = useState(toggleState);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
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
        <Text
          style={{ fontFamily: "Mulish-medium" }}
          className={` text-base ${
            type === "error" ? "text-red-600" : "text-deepMarine-700"
          } `}
        >
          {title}
        </Text>
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
    </TouchableOpacity>
  );
};

export default SettingsItem;
