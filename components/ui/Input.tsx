import {
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

interface PropTypes {
  label: string;
  keyboardType?: string;
  secure?: boolean;
  onUpdateValue: (inputType: string, enteredValue: string) => void;
  inputType?: string;
  value: string;
  isInvalid: boolean;
}

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  inputType,
  value,
  isInvalid,
}: PropTypes) {
  function handleTextChange(text: string) {
    onUpdateValue(text, inputType);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize='none'
        keyboardType={keyboardType as KeyboardTypeOptions}
        secureTextEntry={secure}
        onChangeText={handleTextChange}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "black",
    marginBottom: 4,
  },
  labelInvalid: {
    color: "red",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: "pink",
  },
});
