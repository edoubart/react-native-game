// NPM Packages
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

// Custom Modules
import {
  StartGame,
} from './../../screens';

// Styles
import styles from './styles';

const StartGameScreen = StartGame;

function App() {
  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.app}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

export default App;
