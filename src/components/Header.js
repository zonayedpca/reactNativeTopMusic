import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './common';

const Header = () => {
  const { headerStyle, headerTextStyle, textStyle } = styles;
  return (
    <View style={headerStyle}>
      <View>
        <Text style={headerTextStyle}>Top Music</Text>
        <Text style={textStyle}>Discover Top Music From Here</Text>
      </View>
      <View>
        <Button>Source</Button>
      </View>
    </View>
  )
}

const styles = {
  headerStyle: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#8678fe',
    paddingTop: 70,
    paddingBottom: 100,
    paddingLeft: 30,
    paddingRight: 30
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '900'
  },
  textStyle: {
    color: '#fff'
  }
}

export default Header;
