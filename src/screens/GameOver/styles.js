// NPM Packages
import { /*Dimensions,*/ StyleSheet } from 'react-native';

// Colors
import colors from './../../constants/colors';

// Dimensions
//const deviceWidth = Dimensions
//  .get('window')
//  .width;

const styles = StyleSheet.create({
  foreground: {
    borderColor: colors.primary800,
    //borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    //height: deviceWidth < 380 ? 150 : 300,
    overflow: 'hidden',
    margin: 36,
    //width: deviceWidth < 380 ? 150 : 300,
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
  screen: {
    flex: 1,
  },
  summary: {
    fontFamily: 'open-sans',
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default styles;
