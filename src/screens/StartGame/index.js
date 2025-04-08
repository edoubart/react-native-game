// NPM Packages
import { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  View,
} from 'react-native';

// Custom Modules
import {
  Card,
  InstructionText,
  PrimaryButton,
  Title,
} from './../../components/ui';

// Styles
import styles from './styles';

// Constants
const ALERT_BUTTON_LABEL = "Okay";
const ALERT_BUTTON_STYLE = 'destructive';
const NUMBER_MAX = 99;
const NUMBER_MIN = 0;
const ALERT_DESCRIPTION = "Number has to be a number between " + (NUMBER_MIN + 1) + " and " + NUMBER_MAX + ".";
const ALERT_TITLE = "Invalid number!";
const INSTRUCTIONS_TEXT = "Enter a Number";
const PRIMARY_BUTTON_CONFIRM_LABEL = "Confirm";
const PRIMARY_BUTTON_RESET_LABEL = "Reset";
const TEXT_INPUT_AUTO_CAPITALIZE = 'none';
const TEXT_INPUT_AUTO_CORRECT = false;
const TEXT_INPUT_KEYBOARD_TYPE = 'number-pad';
const TEXT_INPUT_MAX_LENGTH = 2;

function StartGame(props) {
  // State
  const [ enteredNumber, setEnteredNumber ] = useState('');

  // Handlers
  function handleChangeNumber(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function handleConfirmNumber() {
    const chosenNumber = parseInt(enteredNumber);

    if (validateNumber(chosenNumber)) {
      props.handlers.startGame(enteredNumber);
    }
    else {
      Alert.alert(
        ALERT_TITLE,
        ALERT_DESCRIPTION,
        [
          {
            onPress: handleResetNumber,
            style: ALERT_BUTTON_STYLE,
            text: ALERT_BUTTON_LABEL,
          }
        ],
      );

      return;
    }
  }

  function handleResetNumber() {
    setEnteredNumber('');
  }

  // Helpers
  function validateNumber(number) {
    let result;

    if (!isNaN(number) && number > NUMBER_MIN && number < NUMBER_MAX) {
      result = true;
    }
    else {
      result = false;
    }

    return result;
  }

  return (
    <View style={styles.startGame}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>{ INSTRUCTIONS_TEXT }</InstructionText>
        <TextInput
          autoCapitalize={TEXT_INPUT_AUTO_CAPITALIZE}
          autoCorrect={TEXT_INPUT_AUTO_CORRECT}
          keyboardType={TEXT_INPUT_KEYBOARD_TYPE}
          maxLength={TEXT_INPUT_MAX_LENGTH}
          onChangeText={handleChangeNumber}
          style={styles.textInput}
          value={enteredNumber}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton
              handlers={{
                resetNumber: handleResetNumber,
              }}
            >
              { PRIMARY_BUTTON_RESET_LABEL }
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              handlers={{
                press: handleConfirmNumber,
              }}
            >
              { PRIMARY_BUTTON_CONFIRM_LABEL }
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGame;
