import { Text, View } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../../common/Icon/Icon';

const Badge = ({ variant, icon, label, marginLeft }) => {
  return (
    <View
      style={{ backgroundColor: colors[variant][200] }}
      className={`rounded-full flex flex-row items-start px-4 py-2 ${marginLeft}`}
    >
      {icon && (
        <View className="mr-2">
          <Icon name={icon} size={20} color={colors[variant][600]} />
        </View>
      )}
      <Text style={{ fontFamily: 'Mulish-bold', color: colors[variant][600] }} className="text-sm">
        {label}
      </Text>
    </View>
  );
};

export default Badge;
