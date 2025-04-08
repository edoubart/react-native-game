// NPM Packages
import { StyleSheet } from 'react-native';

// Colors
import colors from './../../constants/colors';

const styles = StyleSheet.create({
  foreground: {
    borderColor: colors.primary800,
    borderRadius: 150,
    borderWidth: 3,
    height: 300,
    overflow: 'hidden',
    margin: 36,
    width: 300,
  },
  gameOver: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  highlight: {
    color: colors.primary500,
    fontFamily: 'open-sans-bold',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summary: {
    fontFamily: 'open-sans',
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default styles;
