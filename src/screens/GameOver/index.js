// NPM Packages
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

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
  // Dimensions
  const { height, width } = useWindowDimensions();

  // Helpers
  function getImageStyle() {
    let imageSize = 300;

    if (width < 380) {
      imageSize = 150;
    }

    if (height < 400) {
      imageSize = 80;
    }

    const imageStyle = {
      borderRadius: imageSize / 2,
      height: imageSize,
      width: imageSize,
    };

    return imageStyle;
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.gameOver}>
        <Title>GAME OVER</Title>
        <View style={styles.foreground}>
          <Image
            source={require(IMAGE_FOREGROUND_PATH)}
            style={{ ...styles.image, ...getImageStyle() }}
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
    </ScrollView>
  );
}

export default GameOver;
