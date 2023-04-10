import { View } from "react-native";
import DataViewItem from "./DataViewItem";

const DataView = ({ data }) => {
  return (
    <View className="bg-deepMarine-100 px-4 py-2 rounded-lg">
      {Object.entries(data).map(
        ([label, { data, options, method, column, type }], index) => {
          const hasBorder = index !== data.length - 1;
          return (
            <DataViewItem
              hasBorder={hasBorder}
              type={type}
              key={index}
              data={data}
              method={method}
              column={column}
              label={label}
              options={options}
            />
          );
        }
      )}
    </View>
  );
};

export default DataView;
