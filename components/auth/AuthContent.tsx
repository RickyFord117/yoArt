import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import AuthForm from "./AuthForm";
import Button from "../ui/Button";
import { RootStackParamList } from "@/interfaces/types";

interface PropTypes {
  isLogin?: boolean;
  onAuthenticate: (email: string, password: string) => Promise<void>;
}

function AuthContent({ isLogin, onAuthenticate }: PropTypes) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthMode() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHanlder(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@"); //replace is email validation library?
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate(email, password);
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHanlder}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <Button onPress={switchAuthMode}>
          {isLogin ? "Create a new user" : "Log in"}
        </Button>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
  },
});
