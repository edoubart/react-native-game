// NPM Packages
import { Text, View } from 'react-native';

// Custom Modules
import Title from './../../components/Title';

// Styles
import styles from './styles';

// Constants
const TITLE_LABEL = "Opponent's Guess";

function Game(props) {
  return (
    <View style={styles.game}>
      <Title>{ TITLE_LABEL }</Title>
      <View>
        <Text>
          Higher or lower?
        </Text>
        + -
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default Game;
