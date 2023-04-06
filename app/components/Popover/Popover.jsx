import { useEffect, useState } from "react";
import { Modal, TouchableOpacity } from "react-native";

const Popover = ({
  children,
  isVisible,
  transparent,
  animationType = "none" | "slide" | "fade",
}) => {
  const [modalVisible, setModalVisible] = useState(isVisible);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        onPressIn={() => setModalVisible(false)}
        className="w-full h-full bg-gray-700 opacity-30 top-0 bottom-0 right-0 left-0 absolute"
      ></TouchableOpacity>
      {children}
    </Modal>
  );
};

export default Popover;
