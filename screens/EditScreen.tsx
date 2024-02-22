import { Image, StyleSheet, Text, View } from "react-native";
import Form from "../components/ui/Form";

function EditScreen({ route }) {
  const imageUri = route.params?.imageUri;
  const promptText = route.params?.promptText;

  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.imageTitle}>You're image</Text>
        <Text style={styles.promptText}>{promptText}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
      <View style={styles.formContainer}>
        <Form />
      </View>
    </View>
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textContainer: {},
  imageContainer: {
    margin: 24,
    overflow: "hidden",
    borderRadius: 12,
  },
  imageTitle: {},
  promptText: {},
  image: {
    width: 800,
    height: 800,
  },
  formContainer: {},
});
