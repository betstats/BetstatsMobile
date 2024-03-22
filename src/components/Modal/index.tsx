import React from 'react';
import { Modal as RNModal, View, TouchableOpacity } from 'react-native';


type Props = {
  children: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
  
};

const Modal: React.FC<Props> = ({ children, visible, onClose }) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        className='flex justify-center items-center bg-custom-bg'
        activeOpacity={1} 
        onPress={onClose}>
        <View className='bg-white rounded-lg p-20 w-80 max-w-400'>{children}</View>
      </TouchableOpacity>
    </RNModal>
  );
}
export default Modal;
