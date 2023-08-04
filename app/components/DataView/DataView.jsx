import { View } from 'react-native';

import DataViewItem from './DataViewItem';

const DataView = ({ data }) => {
  const dataArray = Object.entries(data);

  return (
    <View className="bg-deepMarine-100 px-4 py-2 rounded-lg">
      {dataArray.map(
        ([label, { data: medicalData, tag, options, method, column, type }], index) => {
          const hasBorder = index < dataArray.length - 1;

          return (
            <DataViewItem
              hasBorder={hasBorder}
              type={type}
              key={index}
              tag={tag}
              data={medicalData}
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
