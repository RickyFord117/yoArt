import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { createCanvas, loadImage } from "canvas";

import Form from "../components/ui/Form";

function EditScreen({ route }) {
  const [messageText, setMessageText] = useState("");
  const [canvasDataUrl, setCanvasDataUrl] = useState("");

  const imageUri = route.params?.imageUri;
  const promptText = route.params?.promptText;

  const canvas = createCanvas(800, 800);
  const ctx = canvas.getContext("2d");

  loadImage(imageUri).then((image) => {
    ctx.drawImage(image, 0, 0, 800, 800);
    setCanvasDataUrl(canvas.toDataURL());
  });

  function onTextEntered(text: string) {
    setMessageText(text);
  }

  function onFormSubmitted() {
    //confirm
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftSide}>
        <View style={styles.rightTextContainer}>
          <Text style={styles.imageTitle}>Your image:</Text>
          <Text style={styles.promptText}>{promptText}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: canvasDataUrl }} />
          <Text style={styles.messageText}>{messageText}</Text>
        </View>
      </View>

      <View style={styles.rightSide}>
        <View style={styles.leftTextContainer}>
          <Text style={styles.imageTitle}>Your Message:</Text>
        </View>
        <View style={styles.formContainer}>
          <Form onTextEntered={onTextEntered} onSubmit={onFormSubmitted} />
        </View>
      </View>
    </View>
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftSide: {
    flex: 1,
    alignItems: "center",
  },
  leftTextContainer: {
    padding: 50,
    alignItems: "center",
  },
  messageText: {
    fontSize: 16,
    color: "#ffffff",
    position: "absolute",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 12,
    width: 800,
    height: 800,
  },
  imageTitle: {
    fontSize: 24,
  },
  promptText: {
    fontSize: 18,
    padding: 12,
  },
  image: {
    width: 800,
    height: 800,
  },
  rightSide: {
    flex: 1,
  },
  rightTextContainer: {
    paddingBottom: 80,
    paddingTop: 100,
    alignItems: "center",
  },
  formContainer: {},
});
