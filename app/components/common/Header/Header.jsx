import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import colors from '../../../theme/colors';
import ArrowLeft from '../../svg/icons/ArrowLeft';
import LogoSmall from '../../svg/logoSmall';

const Header = ({ withPrevious = false, withClose = false, withSettings = false, title }) => {
  const navigation = useNavigation();

  return (
    <View className="w-full flex items-center relative mt-2 mb-8">
      {withPrevious && (
        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute z-10 left-3 top-0"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft />
        </TouchableOpacity>
      )}
      {withClose && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute z-10 left-3 top-0"
        >
          <MaterialCommunityIcons name="close" size={28} color={colors.turquoise[700]} />
        </TouchableOpacity>
      )}
      {!withClose && !withPrevious && (
        <View className="absolute z-10 left-3 top-0">
          <LogoSmall />
        </View>
      )}
      <Text
        style={{ fontFamily: 'Mulish-bold' }}
        className="text-center text-lg text-deepMarine-700"
      >
        {title}
      </Text>
      {withSettings && (
        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute z-10 right-4 top-0"
          onPress={() => navigation.navigate('Settings')}
        >
          <MaterialCommunityIcons name="menu" size={28} color={colors.turquoise[700]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
