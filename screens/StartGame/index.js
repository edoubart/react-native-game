// NPM Packages
import { TextInput, View } from 'react-native';

// Custom Modules
import PrimaryButton from './../../components/PrimaryButton';

// Styles
import styles from './styles';

// Constants
const TEXT_INPUT_AUTO_CAPITALIZE = 'none';
const TEXT_INPUT_AUTO_CORRECT = false;
const TEXT_INPUT_KEYBOARD_TYPE = 'number-pad';
const TEXT_INPUT_MAX_LENGTH = 2;

function StartGame() {
  return (
    <View style={styles.startGame}>
      <TextInput
        autoCapitalize={TEXT_INPUT_AUTO_CAPITALIZE}
        autoCorrect={TEXT_INPUT_AUTO_CORRECT}
        keyboardType={TEXT_INPUT_KEYBOARD_TYPE}
        maxLength={TEXT_INPUT_MAX_LENGTH}
        style={styles.textInput}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGame;
