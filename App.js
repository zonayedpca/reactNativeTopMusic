import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import Albums from './src/components/Albums';

class App extends React.Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Header />
        <Albums />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  }
};

export default App;
