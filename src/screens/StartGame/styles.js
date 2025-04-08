// NPM Packages
import { StyleSheet } from 'react-native';

// Colors
import colors from './../../constants/colors';

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  startGame: {
    alignItem: 'center',
    flex: 1,
    marginTop: 100,
  },
  textInput: {
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    fontSize: 32,
    fontWeight: 'bold',
    height: 100,
    marginVertical: 8,
    textAlign: 'center',
    width: 50,
  },
});

export default styles;
