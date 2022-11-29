import "./Header.css";

const Header = () => {
  return (
    <header className="top-content">
      <h1>Your Company</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div>
          <button type="button">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
