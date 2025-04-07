// NPM Packages
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

// Custom Modules
import {
  StartGame,
} from './../../screens';

// Styles
import styles from './styles';

// Screens
const StartGameScreen = StartGame;

// Constants
const IMAGE_BACKGROUND_IMAGE_STYLE = '';
const IMAGE_BACKGROUND_PATH = './../../assets/images/background.png';
const IMAGE_BACKGROUND_RESIZE_MODE = 'cover';

function App() {
  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.app}
    >
      <ImageBackground
        imageStyle={styles.imageBackground}
        resizeMode={IMAGE_BACKGROUND_RESIZE_MODE}
        source={require(IMAGE_BACKGROUND_PATH)}
        style={styles.app}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;
