// NPM Packages
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonsLandscape: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonsPortrait: {
    flexDirection: 'row',
  },
  game: {
    alignItems: 'center',
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  logs: {
    flex: 1,
    padding: 16,
  },
});

export default styles;
