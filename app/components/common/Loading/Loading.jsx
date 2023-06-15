import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import colors from '../../../theme/colors';

const LoadingIndicator = ({ timeout = 500 }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(true);
    }, timeout);
    return () => clearTimeout(id);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <ActivityIndicator color={colors.deepMarine[500]} />;
};

export default LoadingIndicator;
