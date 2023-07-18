import { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

const Popover = ({
  children,
  isVisible,
  transparent = true,
  animationType = 'none' | 'slide' | 'fade',
}) => {
  const [modalVisible, setModalVisible] = useState(isVisible);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Modal transparent visible={isVisible} animationType="fade">
        <View className="w-full h-full bg-black opacity-25" />
        <View className="w-full h-full absolute justify-center items-center">{children}</View>
      </Modal>
    </Modal>
  );
};

export default Popover;
