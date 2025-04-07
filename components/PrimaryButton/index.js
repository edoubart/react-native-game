// NPM Packages
import { Text, Pressable, View } from 'react-native';

// Styles
import styles from './styles';

function PrimaryButton(props) {
  // Handlers
  function handlePress() {
    console.log('Here!');
  }

  return (
    <View style={styles.primaryButton}>
      <Pressable
        android_ripple={{
          color: '#640233',
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
