import { View } from "react-native";
import DataViewItem from "./DataViewItem";

const DataView = ({ data }) => {
  return (
    <View className="bg-deepMarine-100 px-4 py-2 rounded-lg">
      {Object.entries(data).map(([key, value]) => {
        return <DataViewItem key={key} item={value} label={key} />;
      })}
    </View>
  );
};

export default DataView;
