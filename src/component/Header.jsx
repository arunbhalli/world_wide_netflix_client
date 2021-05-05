import React from "react";
import { Button } from "semantic-ui-react";
import LoginModal from "./LoginModal";

const Header = () => {
  return (
    <div>
      <h1 data-cy="header">Hello World</h1>
      <LoginModal />
     
    </div>
  );
};

export default Header;
