// NPM Packages
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

// Custom Modules
import {
  Card,
  InstructionText,
  NumberBox,
  PrimaryButton,
  Title,
} from './../../components/ui';
import GuessLogItem from './GuessLogItem';

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
const ICON_HIGHER_COLOR = 'white';
const ICON_HIGHER_NAME = 'add';
const ICON_HIGHER_SIZE = 24;
const ICON_LOWER_COLOR = 'white';
const ICON_LOWER_NAME = 'remove';
const ICON_LOWER_SIZE = 24;
const INSTRUCTIONS_TEXT = "Higher or lower?";
const NUMBER_MAX = 100;
const NUMBER_MIN = 1;
const TITLE_LABEL = "Opponent's Guess";

function Game(props) {
  // State
  const initialGuess = generateRandomBetween(
    NUMBER_MIN, NUMBER_MAX, props.data.userNumber
  );
  const initialGame = {
    currentGuess: initialGuess,
    minBoundary: NUMBER_MIN,
    maxBoundary: NUMBER_MAX,
    guessRounds: [initialGuess],
  };
  const [ game, setGame ] = useState(initialGame);

  // Dimensions
  const { height, width } = useWindowDimensions();

  // Hooks
  useEffect(() => {
    if (game.currentGuess == props.data.userNumber) {
      props.handlers.endGame(game.guessRounds.length);
    }
  }, [
    game,
    game.currentGuess,
    props.data,
    props.data.userNumber,
  ]);

  useEffect(() => {
    setGame(initialGame);
  }, []);

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
        guessRounds: [ ...game.guessRounds, nextGuess ],
      });

      props.handlers.incrementRoundCount();
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

  // Renderers
  function renderGuessRound(itemData) {
    return (
      <GuessLogItem
        data={{
          roundNumber: game.guessRounds.length - itemData.index,
          guess: itemData.item,
        }}
      />
    );
  }

  function renderLandscape() {
    return (
      <>
        <View style={styles.buttonsLandscape}>
          <View style={styles.button}>
            <PrimaryButton
              handlers={{
                press: handleGuessLower,
              }}
            >
              <Ionicons
                color={ICON_LOWER_COLOR}
                name={ICON_LOWER_NAME}
                size={ICON_LOWER_SIZE}
              />
            </PrimaryButton>
          </View>
          <NumberBox>{ game.currentGuess }</NumberBox>
          <View style={styles.button}>
            <PrimaryButton
              handlers={{
                press: handleGuessHigher,
              }}
            >
              <Ionicons
                color={ICON_HIGHER_COLOR}
                name={ICON_HIGHER_NAME}
                size={ICON_HIGHER_SIZE}
              />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  function renderPortrait() {
    return (
      <>
        <NumberBox>{ game.currentGuess }</NumberBox>
        <Card>
          <InstructionText style={styles.instructionText}>
            { INSTRUCTIONS_TEXT }
          </InstructionText>
          <View style={styles.buttonsPortrait}>
            <View style={styles.button}>
              <PrimaryButton
                handlers={{
                  press: handleGuessLower,
                }}
              >
                <Ionicons
                  color={ICON_LOWER_COLOR}
                  name={ICON_LOWER_NAME}
                  size={ICON_LOWER_SIZE}
                />
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton
                handlers={{
                  press: handleGuessHigher,
                }}
              >
                <Ionicons
                  color={ICON_HIGHER_COLOR}
                  name={ICON_HIGHER_NAME}
                  size={ICON_HIGHER_SIZE}
                />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    );
  }

  return (
    <View style={styles.game}>
      <Title>{ TITLE_LABEL }</Title>
      { (width < 500) ? renderPortrait() : renderLandscape() }
      <View style={styles.logs}>
        <FlatList
          data={game.guessRounds.reverse()}
          keyExtractor={item => item}
          renderItem={renderGuessRound}
        />
      </View>
    </View>
  );
}

export default Game;
