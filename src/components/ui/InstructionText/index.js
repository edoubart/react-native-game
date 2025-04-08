// NPM Packages
import { Text } from 'react-native';

// Styles
import styles from './styles';

function InstructionText(props) {
  return (
    <Text style={[styles.instructionText, props.style]}>
      { props.children }
    </Text>
  );
}

export default InstructionText;
