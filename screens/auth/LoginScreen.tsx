import { useState, useContext } from "react";

import AuthContent from "../../components/auth/AuthContent";
import { login } from "../../util/auth";
import { AuthContext } from "../../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler(email: string, password: string) {
    setIsAuthenticating(true);

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      alert("Authentication failed");
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    // return <LoadingOverlay />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
