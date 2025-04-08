// NPM Packages
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

// Custom Modules
import NumberBox from './../../components/NumberBox';
import PrimaryButton from './../../components/PrimaryButton';
import Title from './../../components/Title';

// Styles
import styles from './styles';

// Helpers
import { generateRandomBetween } from './../../helpers';

// Constants
const ALERT_BUTTON_LABEL = "Sorry!";
const ALERT_BUTTON_STYLE = 'cancel';
const ALERT_DESCRIPTION = "You know that this is wrong ...";
const ALERT_TITLE = "Don't lie!";
const DIRECTION_HIGHER = 'higher';
const DIRECTION_LOWER = DIRECTION_LOWER;
const NUMBER_MAX = 100;
const NUMBER_MIN = 1;
const TITLE_LABEL = "Opponent's Guess";

function Game(props) {
  // Variables
  let maxBoundary = NUMBER_MAX;
  let minBoundary = NUMBER_MIN;

  // State
  const initialGuess = generateRandomBetween(
    minBoundary, maxBoundary, props.data.userNumber
  );
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess);

  // Handlers
  function handleGuessHigher() {
    return handleNextGuess(DIRECTION_HIGHER);
  }

  function handleGuessLower() {
    return handleNextGuess(DIRECTION_LOWER);
  }

  function handleNextGuess(direction) {
    if (validateDirection(direction, currentGuess, props.data.userNumber)) {
      if (direction === DIRECTION_LOWER) {
        maxBoundary = currentGuess;
      }
      else if (direction === DIRECTION_HIGHER) {
        minBoundary = currentGuess + 1;
      }

      let nextGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

      setCurrentGuess(nextGuess);
    }
    else {
      Alert.alert(
        ALERT_TITLE,
        ALERT_DESCRIPTION,
        [
          {
            style: ALERT_BUTTON_STYLE,
            text: ALERT_BUTTON_LABEL,
          }
        ],
      );

      return;
    }
  }

  // Helpers
  function validateDirection(direction, currentGuess, userNumber) {
    let result;

    if (direction === DIRECTION_LOWER && currentGuess < userNumber) {
      result = false;
    }
    else if (direction === DIRECTION_HIGHER && currentGuess > userNumber) {
      result = false;
    }
    else {
      result = true;
    }

    return result;
  }

  return (
    <View style={styles.game}>
      <Title>{ TITLE_LABEL }</Title>
      <NumberBox>{ currentGuess }</NumberBox>
      <View>
        <Text>
          Higher or lower?
        </Text>
        <View style={styles.buttons}>
          <PrimaryButton
            handlers={{
              press: handleGuessHigher,
            }}
          >
            +
          </PrimaryButton>
          <PrimaryButton
            handlers={{
              press: handleGuessLower,
            }}
          >
            -
          </PrimaryButton>
        </View>
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default Game;
