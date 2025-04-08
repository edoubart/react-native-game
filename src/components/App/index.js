// NPM Packages
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

// Custom Modules
import {
  Game,
  GameOver,
  StartGame,
} from './../../screens';

// Styles
import styles from './styles';

// Colors
import colors from './../../constants/colors';

// Screens
const GameScreen = Game;
const GameOverScreen = GameOver;
const StartGameScreen = StartGame;

// Constants
const FONT_BOLD_PATH = './../../../assets/fonts/OpenSans-Regular.ttf';
const FONT_PATH = './../../../assets/fonts/OpenSans-Bold.ttf';
const IMAGE_BACKGROUND_IMAGE_STYLE = '';
const IMAGE_BACKGROUND_PATH = './../../../assets/images/background.png';
const IMAGE_BACKGROUND_RESIZE_MODE = 'cover';

function App() {
  // State
  const [ userNumber, setUserNumber ] = useState(null);
  const [ gameOver, setGameOver ] = useState(true);

  // Fonts
  const [ fontsLoaded ] = useFonts({
    'open-sans': require(FONT_PATH),
    'open-sans-bold': require(FONT_BOLD_PATH),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // Handlers
  function handleEndGame() {
    setGameOver(true);
  }

  function handleStartGame(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  // Renderers
  function renderScreen() {
    let result;

    if (gameOver) {
      if (userNumber) {
        result = (
          <GameOverScreen
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
    }
    else {
      if (userNumber) {
        result = (
          <GameScreen
            data={{
              userNumber,
            }}
            handlers={{
              endGame: handleEndGame,
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
