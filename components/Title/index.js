// NPM Packages
import { Text, View } from 'react-native';

// Styles
import styles from './styles';

function Title(props) {
  return (
    <Text style={styles.title}>
      { props.children }
    </Text>
  );
}

export default Title;
