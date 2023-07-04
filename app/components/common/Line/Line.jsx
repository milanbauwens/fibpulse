import { View } from 'react-native';

const Line = ({ marginBottom = 16, marginTop = 16 }) => (
  <View style={{ marginTop, marginBottom }} className="border border-turquoise-200" />
);

export default Line;
