// NPM Packages
import { StyleSheet } from 'react-native';

// Colors
import colors from './../../../constants/colors';

const styles = StyleSheet.create({
  guessLogItem: {
    backgroundColor: colors.accent500,
    borderColor: colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4, // Shadow (Android)
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: '100%',
  },
  text: {
    fontFamily: 'open-sans',
  },
});

export default styles;
