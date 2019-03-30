import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ children, onPress }) => {
  const { btnStyle, btnTextStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={btnTextStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  btnStyle: {
    backgroundColor: '#f87e40',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 4
  },
  btnTextStyle: {
    fontWeight: '900',
    color: '#fff'
  }
}

export { Button };
