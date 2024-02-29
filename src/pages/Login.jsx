import { useEffect, useState } from "react";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import { useLogin } from "../features/login/useLogin";
import { useUser } from "../features/login/useUser";
import { useNavigate } from "react-router-dom";

function Login({ isLogged, setIsLogged }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();
  const [email, setEmail] = useState("robfrontdev@gmail.com");
  const [password, setPassword] = useState("123456789");

  const { login, isLogin } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/panel");
    },
    [isAuthenticated, navigate]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label>E-mail</label>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLogin}
          />
        </FormRow>
        <FormRow>
          <label>Password</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLogin}
          />
        </FormRow>
        <Button size="large" variation="primary" disabled={isLogin}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
