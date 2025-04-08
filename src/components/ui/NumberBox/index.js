// NPM Packages
import { Text, View } from 'react-native';

// Styles
import styles from './styles';

function NumberBox(props) {
  return (
    <View style={styles.numberBox}>
      <Text style={styles.text}>
        { props.children }
      </Text>
    </View>
  );
}

export default NumberBox;
