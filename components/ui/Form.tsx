import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "./Button";
import MessageInput from "./inputs/MessageInput";
import { EditFormParamList } from "@/interfaces/types";

function Form({ onTextEntered, onSubmit, onDownload }: EditFormParamList) {
  const [message, setMessage] = useState("");
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [somethingSubmitted, setSomethingSubmitted] = useState(false);

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

    setSomethingSubmitted(true);
    onSubmit();
  }

  function onDownloadHandler() {
    if (!messageInvalid && message.length < 15) {
      setMessageInvalid(true);

      return;
    } else if (somethingSubmitted) {
      onDownload();
    }
  }

  return (
    <View style={styles.formContainer}>
      <MessageInput
        value={message}
        onUpdateValue={updateInputValueHandler}
        isInvalid={messageInvalid}
      />
      <View style={styles.buttons}>
        <Button onPress={onSubmitHandler}>Confirm</Button>
        <Button onPress={onDownloadHandler}>Download</Button>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  formContainer: {},
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});
