import React from 'react';
import { View, Text } from 'react-native';

const CardSection = ({ style, children }) => {
  const { sectionStyle } = styles;
  return (
    <View style={[sectionStyle, style]}>
      {children}
    </View>
  )
}

const styles = {
  sectionStyle: {
    backgroundColor: '#fff',
    borderRadius: 8
  }
}

export { CardSection };
