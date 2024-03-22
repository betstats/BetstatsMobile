import React from 'react';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Logo } from '../../../assets/icons/Logo';

const Header: React.FC = () => {
  return (
    <View className= ' flex-col w-full'>
      <View className= 'items-center py-10 bg-custom-bg'>
        <SvgXml xml={Logo} />
      </View>
      <View className = 'flex-col items-center bg-custom-bg'>
        <Text className='font-bold text-light-textCross text-xl'>
          Seja bem vindo(a),
        </Text>
      </View>
    </View>
  );
};

export default Header;
