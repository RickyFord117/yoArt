import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function HomeScreen() {
  const [prompt, setPrompt] = useState("");

  function updatePromptHandler(enteredPrompt) {
    // validation goes here..

    setPrompt(enteredPrompt);
  }

  function onSubmitPrompt() {}

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome to YoArt!</Text>
      <Input
        label='Enter a prompt'
        onUpdateValue={updatePromptHandler.bind(this)}
        keyboardType='default'
        value={prompt}
      />
      <Button onPress={onSubmitPrompt}>Go!</Button>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
