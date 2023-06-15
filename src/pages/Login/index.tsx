import React, { useState } from "react";
import logotipo from "../../assets/Logotipo.svg";
import "./styles.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-box">
      <img src={logotipo} alt="Logo" className="logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="password-input">
          <input
            id="senha"
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={handleTogglePasswordVisibility}
          ></i>
        </div>
        <a href="www.google.com.br" className="forgot-password-link">
          Esqueceu a senha?
        </a>

        <Link type="submit" className="login-button" to="/create-point">
          Entrar
        </Link>

        <div className="cadastrar">
          <span>Não tem uma conta?</span>
          <Link id="link-add" to="/cadastrarUser">
            Cadastrar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
