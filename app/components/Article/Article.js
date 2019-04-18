import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const Article = ({ title, textArticle, datePub, likeIt }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{textArticle.substring(0, 250)}...</Text>
    <View style={styles.footer}>
      <View style={styles.likeIt}>
        <Icon name="thumb-up-outline" type="material-community" color="black" />
        <Text style={{ marginLeft: 5 }}>{likeIt}</Text>
      </View>
      <Text style={styles.datePub}>{datePub}</Text>
    </View>
  </View>
);

Article.propTypes = {
  title: PropTypes.string,
  textArticle: PropTypes.string,
  datePub: PropTypes.string,
  likeIt: PropTypes.string
};

export default Article;
