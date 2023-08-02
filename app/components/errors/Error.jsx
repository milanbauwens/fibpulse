import { Text, View } from 'react-native';

import { Icon } from '../common/Icon/Icon';

const Error = ({ error }) => {
  return (
    <View
      className="flex flex-row items-center bg-red-100 border border-[#FF3B30] p-3 rounded-lg relative"
      role="alert"
    >
      <Icon name="alert-triangle" size={24} color="#FF3B30" />
      <Text
        style={{ fontFamily: 'Mulish-bold' }}
        className="ml-3 block flex-1 text-sm text-[#FF3B30]"
      >
        {error}
      </Text>
    </View>
  );
};

export default Error;
