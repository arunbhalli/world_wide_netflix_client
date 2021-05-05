import React, { useState } from "react";
import { Modal, Button, Form } from "semantic-ui-react";

const LoginModal = () => {

  const [visibility, setVisibility] = useState(false);
  return (
    <Modal
      centered={false}
      open={visibility}
      onClose={() => setVisibility(false)}
      onOpen={() => setVisibility(true)}
      trigger={<Button data-cy="login-btn">Login</Button>}
    >
      <Modal.Header data-cy="login-modal-header">Thank you!</Modal.Header>
      <Modal.Content>
        
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setVisibility(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LoginModal;
