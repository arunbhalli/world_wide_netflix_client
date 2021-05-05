import React from "react";
import LoginModal from "./LoginModal";
import { Header } from "semantic-ui-react";

const HeaderMainPage = () => {
  return (
    <div data-cy="header">
      <Header>World Wide Netflix</Header>
      <LoginModal />
  
    </div>
  );
};

export default HeaderMainPage;
