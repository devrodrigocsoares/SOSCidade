import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./stylesRegister.css";

const Login: React.FC = () => {
  const [alert, setAlert] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleCPFchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleSexochange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexo(event.target.value);
  };

  const handleNascimentochange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNascimento(event.target.value);
  };

  const handleTelefonechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Nome:", nome);
    console.log("CPF:", cpf);
    console.log("Sexo:", sexo);
    console.log("Nascimento:", nascimento);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("Login:", login);
    console.log("Senha:", senha);
  };

  return (
    <div className="login-box">
      <img src={logo} alt="Logo" className="logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Cadastrar</h2>
        <input
          id="nome"
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={handleNomeChange}
        />
        <input
          id="cpf"
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={handleCPFchange}
        />
        <input
          id="sexo"
          type="text"
          placeholder="Sexo"
          value={sexo}
          onChange={handleSexochange}
        />
        <input
          id="nascimento"
          type="date"
          placeholder="Data de Nascimento"
          value={nascimento}
          onChange={handleNascimentochange}
        />
        <input
          id="telefone"
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefonechange}
        />
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          id="login"
          type="text"
          placeholder="Login"
          value={login}
          onChange={handleLoginChange}
        />

        <input
          id="senha"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={handleLoginChange}
        />

        <button type="submit" className="login-button">
          Cadastrar Usuário
        </button>

        <div className="cadastrar">
          <span>Já tem uma conta?</span>
          <Link id="link-add" to="/Login">
            Entrar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
