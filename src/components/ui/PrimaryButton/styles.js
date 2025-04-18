// NPM Packages
import { StyleSheet } from 'react-native';

// Colors
import colors from './../../../constants/colors';

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: colors.primary500,
    elevation: 2, // Shadow (Android)
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  // Shadow (iOS)
  pressed: {
    opacity: 0.75,
  },
  primaryButton: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
