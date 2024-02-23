import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "./Button";
import MessageInput from "./inputs/MessageInput";

function Form(onSubmit) {
  const [message, setMessage] = useState("");
  const [messageInvalid, setMessageInvalid] = useState(false);

  function updateInputValueHandler(enteredText: string) {
    setMessage(enteredText);
  }

  function onSubmitHandler() {}

  return (
    <View style={styles.formContainer}>
      <MessageInput
        value={message}
        onUpdateValue={updateInputValueHandler}
        isInvalid={messageInvalid}
      />
      <View style={styles.button}>
        <Button onPress={onSubmitHandler}>Confirm</Button>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  formContainer: {},
  button: {
    alignItems: "center",
  },
});
