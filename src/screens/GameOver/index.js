// NPM Packages
import { Image, Text, View } from 'react-native';

// Custom Modules
import {
  Title,
} from './../../components/ui';

// Styles
import styles from './styles';

// Constants
const IMAGE_FOREGROUND_PATH = './../../../assets/images/success.png';

function GameOver() {
  return (
    <View style={styles.gameOver}>
      <Title>GAME OVER</Title>
      <View style={styles.foreground}>
        <Image
          source={require(IMAGE_FOREGROUND_PATH)}
          style={styles.image}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}

export default GameOver;
