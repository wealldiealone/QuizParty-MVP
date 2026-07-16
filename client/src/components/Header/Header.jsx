import "./Header.css";

function Header({ username = "Иван Иванов" }) {
  return (
    <header className="header">
      <h2 className="header-logo">QuizParty</h2>

      <div className="header-user">
        {username}
      </div>
    </header>
  );
}

export default Header;