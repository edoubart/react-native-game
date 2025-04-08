// NPM Packages
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView } from 'react-native';

// Custom Modules
import {
  Game,
  StartGame,
} from './../../screens';

// Styles
import styles from './styles';

// Colors
import colors from './../../constants/colors';

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
        <GameScreen
          data={{
            userNumber,
          }}
        />
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
      colors={[colors.primary700, colors.accent500]}
      style={styles.app}
    >
      <ImageBackground
        imageStyle={styles.imageBackground}
        resizeMode={IMAGE_BACKGROUND_RESIZE_MODE}
        source={require(IMAGE_BACKGROUND_PATH)}
        style={styles.app}
      >
        <SafeAreaView style={styles.app}>
          { renderScreen() }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;
