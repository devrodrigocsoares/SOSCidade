import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="SOSCidade" />
        </header>

        <main className="container">
          <div className="element">
            <h1>Transforme sua cidade para um futuro mais sustentável.</h1>
            <p>
              Auxilie na gestão de infraestrutra urbana, <br /> reportando
              problemas.
            </p>

            <div className="buttons">
              <Link to="/login">
                <span>
                  <FiLogIn />
                </span>
                <strong>Reportar</strong>
              </Link>

              <Link id="anonimous" to="/create-point">
                <span>
                  <FaUserSecret />
                </span>
                <strong>Reportar <br/> Anonimamente</strong>
              </Link>
            </div>
          </div>
          <div className="element element-image"></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
