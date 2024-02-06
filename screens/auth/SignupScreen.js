import { useContext, useState } from "react";
import { Alert } from "react-native";

import { AuthContext } from "../../store/auth-context";
import AuthContent from "../../components/auth/AuthContent";
import { createUser } from "../../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please try again later"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    // return <LoadingOverlay />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
