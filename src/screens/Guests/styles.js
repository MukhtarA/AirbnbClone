import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  title: {
    fontWeight: 'bold',
  },
  secondaryTitle: {
    color: '#8d8d8d',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'rgba(114,114,114,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 20,
    color: 'rgba(114,114,114,0.55)',
  },
});

export default styles;
