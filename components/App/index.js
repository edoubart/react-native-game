// NPM Packages
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

// Custom Modules
import {
  Game,
  StartGame,
} from './../../screens';

// Styles
import styles from './styles';

// Screens
const GameScreen = Game;
const StartGameScreen = StartGame;

// Constants
const IMAGE_BACKGROUND_IMAGE_STYLE = '';
const IMAGE_BACKGROUND_PATH = './../../assets/images/background.png';
const IMAGE_BACKGROUND_RESIZE_MODE = 'cover';

function App() {
  // State
  const [ userNumber, setUserNumber ] = useState(null);

  // Handlers
  function handleStartGame(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  // Renderers
  function renderScreen() {
    let result;

    if (userNumber) {
      result = (
        <GameScreen />
      );
    }
    else {
      result = (
        <StartGameScreen
          handlers={{
            startGame: handleStartGame,
          }}
        />
      );
    }

    return result;
  }

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
        { renderScreen() }
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;
