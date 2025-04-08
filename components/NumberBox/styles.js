// NPM Packages
import { StyleSheet } from 'react-native';

// Colors
import colors from './../../constants/colors';

const styles = StyleSheet.create({
  numberBox: {
    alignItems: 'center',
    borderColor: colors.accent500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: 'center',
    margin: 24,
    padding: 24,
  },
  text: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default styles;
