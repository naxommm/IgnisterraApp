import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleHome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
  },
  containerBtn: {
    backgroundColor: 'yellow',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 40,
  },
  btnModal: {
    backgroundColor: '#202020',
    alignSelf: 'center',
    padding: 6,
    borderRadius: 8,
    marginTop: 30,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080', 
  },
  modal: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
});

export default styles;
