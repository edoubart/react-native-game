// NPM Packages
import { View } from 'react-native';

// Styles
import styles from './styles';

function Card(props) {
  return (
    <View style={styles.card}>
      { props.children }
    </View>
  );
}

export default Card;
