import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

const API_KEY = `32bd6847bea360a5ec7b7a10d6bfd167`;

import Album from './Album';

class Albums extends Component {
  state = {
    albums: ''
  }

  getAlbum = async() => {
    const { data: { topalbums: { album: albums } } } = await axios(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=linkinpark&api_key=${API_KEY}&format=json&limit=25`);
    this.setState({ albums });
  }

  componentWillMount() {
    this.getAlbum();
  }

  renderAlbums = () => {
    const { albums } = this.state;
    if(!albums) {
      return (
        <Text>Loading..</Text>
      )
    }
    return (
      albums.map((album, index) => {
        if(album.name === '(null)' || album.name === 'title') {
          return null;
        }
        return (
          <Album key={index} item={album} />
        )
      })
    )
  }

  render() {
    const { containerStyle, viewStyle } = styles;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode='always'
        style={containerStyle}
      >
        <View style={viewStyle}>
          {this.renderAlbums()}
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    marginLeft: 30,
    marginRight: 30
  },
  viewStyle: {
    paddingTop: 180
  }
}

export default Albums;
