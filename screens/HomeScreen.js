import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { sendPrompt } from "../util/SDTextToImage";

function HomeScreen() {
  const [isFetchingImage, setIsFetchingImage] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [promptResponseUri, setPromptResponseUri] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);

  function updatePromptHandler(enteredPrompt) {
    // validation goes here..
    if (invalidInput == true && prompt.length > 15) {
      setInvalidInput(false);
    }

    setPrompt(enteredPrompt);
  }

  async function onSubmitPrompt() {
    if (prompt.length < 15) {
      alert("Prompt too short!", "Please enter a longer prompt.");
      setInvalidInput(true);

      return;
    }

    setIsFetchingImage(true);

    try {
      const dataUri = await sendPrompt("stable-diffusion-v1-6", prompt);
      setPromptResponseUri(dataUri);
    } catch (error) {
      alert(
        "Failed to generate image!",
        "Could not generate image, please try again later"
      );
    }

    setIsFetchingImage(false);
  }

  function PromptResult() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: promptResponseUri }} />
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome to YoArt!</Text>
      <Input
        label='Enter a prompt'
        onUpdateValue={updatePromptHandler.bind(this)}
        keyboardType='default'
        value={prompt}
        isInvalid={invalidInput}
      />
      <Button onPress={onSubmitPrompt}>Go!</Button>
      {promptResponseUri && <PromptResult />}
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
  imageContainer: {
    margin: 24,
    overflow: "hidden",
    borderRadius: 12,
  },
  image: {
    width: 800,
    height: 800,
  },
});
