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
    alignItems: 'center',
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4, // Shadow (Android)
    justifyContent: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    // Shadow (iOS)
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
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
