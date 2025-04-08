// NPM Packages
import { StyleSheet } from 'react-native';

// Colors
import colors from './../../../constants/colors';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4, // Shadow (Android)
    justifyContent: 'center',
    marginHorizontal: 24,
    marginTop: 36,
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
});

export default styles;
