import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Article from '../../components/Article';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Simple Blog'
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#fffbd5', '#b20a2c']}
          style={styles.linearGradient}
        >
          <Article />
          <Article />
          <Article />
          <Article />
        </LinearGradient>
      </View>
    );
  }
}

export default Home;
