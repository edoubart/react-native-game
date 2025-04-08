// NPM Packages
import { Text, Pressable, View } from 'react-native';

// Styles
import styles from './styles';

// Colors
import colors from './../../constants/colors';

function PrimaryButton(props) {
  // Handlers
  function handlePress() {
    props.handlers.press();
  }

  return (
    <View style={styles.primaryButton}>
      <Pressable
        android_ripple={{
          color: colors.primary500,
        }}
        onPress={handlePress}
        style={({ pressed }) => {
          return pressed ?
            [styles.pressable, styles.pressed] : styles.pressable
        }}
      >
        <Text style={styles.text}>{ props.children }</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
