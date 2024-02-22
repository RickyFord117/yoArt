import { useContext, useState } from "react";

import { AuthContext } from "../../store/auth-context";
import AuthContent from "../../components/auth/AuthContent";
import { createUser } from "../../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler(email: string, password: string) {
    setIsAuthenticating(true);

    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      alert("Authentication failed");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    // return <LoadingOverlay />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
