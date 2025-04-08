// NPM Packages
import { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';

// Custom Modules
import {
  Card,
  InstructionText,
  NumberBox,
  PrimaryButton,
  Title,
} from './../../components/ui';

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
const INSTRUCTIONS_TEXT = "Higher or lower?";
const NUMBER_MAX = 100;
const NUMBER_MIN = 1;
const TITLE_LABEL = "Opponent's Guess";

function Game(props) {
  // State
  const initialGuess = generateRandomBetween(
    NUMBER_MIN, NUMBER_MAX, props.data.userNumber
  );
  const [ game, setGame ] = useState({
    currentGuess: initialGuess,
    minBoundary: NUMBER_MIN,
    maxBoundary: NUMBER_MAX,
  });

  // Hooks
  useEffect(() => {
    if (game.currentGuess == props.data.userNumber) {
      props.handlers.endGame();
    }
  }, [
    game,
    game.currentGuess,
    props.data,
    props.data.userNumber,
  ]);

  // Handlers
  function handleGuessHigher() {
    return handleNextGuess(DIRECTION_HIGHER);
  }

  function handleGuessLower() {
    return handleNextGuess(DIRECTION_LOWER);
  }

  function handleNextGuess(direction) {
    let newMinBoundary = game.minBoundary;
    let newMaxBoundary = game.maxBoundary;

    const validDirection = validateDirection(
      direction, game.currentGuess, props.data.userNumber
    );
    if (validDirection) {
      if (direction === DIRECTION_LOWER) {
        newMaxBoundary = game.currentGuess;
      }
      else if (direction === DIRECTION_HIGHER) {
        newMinBoundary = game.currentGuess + 1;
      }

      let nextGuess = generateRandomBetween(
        newMinBoundary,
        newMaxBoundary,
        game.currentGuess
      );

      setGame({
        ...game,
        currentGuess: nextGuess,
        minBoundary: newMinBoundary,
        maxBoundary: newMaxBoundary,
      });
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
      <NumberBox>{ game.currentGuess }</NumberBox>
      <Card>
        <InstructionText>{ INSTRUCTIONS_TEXT }</InstructionText>
        <View style={styles.buttons}>
          <PrimaryButton
            handlers={{
              press: handleGuessHigher,
            }}
          >
            <Text>+</Text>
          </PrimaryButton>
          <PrimaryButton
            handlers={{
              press: handleGuessLower,
            }}
          >
            <Text>-</Text>
          </PrimaryButton>
        </View>
      </Card>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default Game;
