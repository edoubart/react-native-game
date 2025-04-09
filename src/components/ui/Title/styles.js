// NPM Packages
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    //fontWeight: 'bold',
    maxWidth: '80%', // Max width (if there is not enough space)
    padding: 12,
    textAlign: 'center',
    width: 300, // Default width (if there is enough space)
  },
});

export default styles;
