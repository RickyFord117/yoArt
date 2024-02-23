import { Image, StyleSheet, Text, View } from "react-native";
import Form from "../components/ui/Form";

function EditScreen({ route }) {
  const imageUri = route.params?.imageUri;
  const promptText = route.params?.promptText;

  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftSide}>
        <View style={styles.textContainer}>
          <Text style={styles.imageTitle}>You're image:</Text>
          <Text style={styles.promptText}>{promptText}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.formContainer}>
          <Form />
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
  rightSide: {
    flex: 1,
  },
  textContainer: {
    paddingBottom: 80,
    paddingTop: 100,
    alignItems: "center",
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
  formContainer: {},
});
