// NPM Packages
import { Dimensions, StyleSheet } from 'react-native';

// Colors
import colors from './../../../constants/colors';

// Dimensions
const deviceWidth = Dimensions
  .get('window')
  .width;

const styles = StyleSheet.create({
  numberBox: {
    alignItems: 'center',
    borderColor: colors.accent500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: 'center',
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
  },
  text: {
    color: colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36,
    //fontWeight: 'bold',
  },
});

export default styles;
