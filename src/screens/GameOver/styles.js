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
  image: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
