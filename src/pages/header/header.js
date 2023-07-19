import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src="./img/logo.png" alt="Logo da aplicação" />
      <div className="info">
        <span>tobias@gmail.com</span>
        <span className="exit">sair</span>
      </div>
    </div>
  );
};

export default Header;
