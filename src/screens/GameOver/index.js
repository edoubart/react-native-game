// NPM Packages
import { Image, Text, View } from 'react-native';

// Custom Modules
import {
  PrimaryButton,
  Title,
} from './../../components/ui';

// Styles
import styles from './styles';

// Constants
const IMAGE_FOREGROUND_PATH = './../../../assets/images/success.png';

function GameOver(props) {
  return (
    <View style={styles.gameOver}>
      <Title>GAME OVER</Title>
      <View style={styles.foreground}>
        <Image
          source={require(IMAGE_FOREGROUND_PATH)}
          style={styles.image}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed { '' }
        <Text style={styles.highlight}>
          { props.data.roundCount }
        </Text> { '' }
        rounds to guess the number { '' }
        <Text style={styles.highlight}>
          { props.data.userNumber }
        </Text>.
      </Text>
      <PrimaryButton
        handlers={{
          press: props.handlers.startGame,
        }}
      >
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOver;
