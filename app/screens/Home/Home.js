import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Article from '../../components/Article';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Simple Blog'
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    return fetch('http://127.0.0.1:8000/blog/api/list')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#fffbd5', '#b20a2c']}
          style={styles.linearGradient}
        >
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <Article
                title={item.title}
                textArticle={item.textArticle}
                datePub={item.datePub}
                likeIt={item.likeIt.toString()}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </LinearGradient>
      </View>
    );
  }
}

export default Home;
