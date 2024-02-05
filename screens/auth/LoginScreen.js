import { useState, useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import AuthContent from "../../components/auth/AuthContent";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
    } catch (error) {}

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    // return <LoadingOverlay />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
