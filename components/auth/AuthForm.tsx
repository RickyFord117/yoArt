import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Input from "../ui/Input";
import Button from "../ui/Button";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHanlder() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <View>
        <Input
          label='Email Address'
          onUpdateValue={updateInputValueHandler}
          inputType={"email"}
          value={enteredEmail}
          keyboardType='email-address'
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label='Confirm Email Address'
            onUpdateValue={updateInputValueHandler}
            inputType={"confirmEmail"}
            value={enteredConfirmEmail}
            keyboardType='email-address'
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label='password'
          onUpdateValue={updateInputValueHandler}
          inputType={"password"}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label='Confirm Password'
            onUpdateValue={updateInputValueHandler}
            inputType={"confirmPassword"}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHanlder}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
