// NPM Packages
import { Text, View } from 'react-native';

// Styles
import styles from './styles';

function GuessLogItem(props) {
  return (
    <View style={styles.guessLogItem}>
      <Text style={styles.text}>#{ props.data.roundNumber }</Text>
      <Text style={styles.text}>Opponent's Guess: { props.data.guess }</Text>
    </View>
  );
}

export default GuessLogItem;
