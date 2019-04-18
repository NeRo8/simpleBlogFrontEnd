import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '95%',
    margin: 5,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5
  },
  body: {
    fontWeight: '300',
    textAlign: 'justify',
    fontStyle: 'italic'
  },
  footer: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeIt: {
    flexDirection: 'row',
    fontWeight: '600',
    alignItems: 'center'
  },
  datePub: {
    fontSize: 12
  }
});
