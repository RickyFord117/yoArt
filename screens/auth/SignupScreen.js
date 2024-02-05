import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import AuthContent from "../../components/auth/AuthContent";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
    } catch (error) {}

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    // return <LoadingOverlay />
  }

  return <AuthContent />;
}

export default SignupScreen;
