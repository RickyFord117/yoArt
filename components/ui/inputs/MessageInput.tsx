import { StyleSheet, Text, TextInput, View } from "react-native";

import { MessageInputPropTypes } from "@/interfaces/types";

function MessageInput({
  value,
  onUpdateValue,
  isInvalid,
}: MessageInputPropTypes) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize='sentences'
        onChangeText={onUpdateValue}
        value={value}
        multiline={true}
      />
    </View>
  );
}

export default MessageInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: "5%",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    fontSize: 16,
    height: 300,
  },
  inputInvalid: { backgroundColor: "pink" },
});
