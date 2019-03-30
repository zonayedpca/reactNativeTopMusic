import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { CardSection, Button } from './common';

const Album = ({ item: { name, artist, image, url } }) => {
  const { containerStyle, imageStyle, labelStyle, detailStyle, titleStyle, artistStyle, textShadow } = styles;

  return (
    <CardSection style={containerStyle}>
      <Image style={imageStyle} source={{ uri: image[3]['#text'] }} />
      <View style={labelStyle}>
        <View>
          <Text style={[titleStyle, textShadow]}>{String(name).length > 15 ? `${String(name).slice(0, 18)}...` : name}</Text>
          <Text style={[artistStyle, textShadow]}>{artist.name}</Text>
        </View>
        <View>
          <Button onPress={() => Linking.openURL(url)}>Visit</Button>
        </View>
      </View>
    </CardSection>
  )
}

const styles = {
  containerStyle: {
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 0
  },
  imageStyle: {
    height: 270,
    width: 'auto',
    borderRadius: 8
  },
  labelStyle: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    bottom: 0,
    padding: 15
  },
  titleStyle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#fff'
  },
  artistStyle: {
    color: '#f0f0f0'
  },
  textShadow: {
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10
  }
}

export default Album;
