import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "./Button";
import MessageInput from "./inputs/MessageInput";
import { EditFormParamList } from "@/interfaces/types";

function Form({ onTextEntered, onSubmit }: EditFormParamList) {
  const [message, setMessage] = useState("");
  const [messageInvalid, setMessageInvalid] = useState(false);

  function updateInputValueHandler(text: string) {
    if (messageInvalid && message.length >= 15) {
      setMessageInvalid(false);
    }
    onTextEntered(text);
    setMessage(text);
  }

  function onSubmitHandler() {
    if (message.length < 15) {
      setMessageInvalid(true);

      return;
    }

    onSubmit();
  }

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
    padding: 12,
  },
});
