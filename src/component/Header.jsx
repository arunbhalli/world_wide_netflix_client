import logInModal from "./LoginModal";

const Header = () => {
  return (
    <div>
      <h1 data-cy="header">Hello World</h1>
      <button onClick={() => logInModal.login()} data-cy="login-btn">
        Login
      </button>
    </div>
  );
};

export default Header;
