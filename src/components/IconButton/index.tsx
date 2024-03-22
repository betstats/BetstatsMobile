import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { calendar } from '../../../assets/icons/calendar';
import { SvgXml } from 'react-native-svg';


const ButtonWithIcon: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className='items-center w-10  py-3 '>
        <SvgXml xml={calendar}  />
      </View>
    </TouchableOpacity>
  );
};

export { ButtonWithIcon};

