import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

const LoginModal = () => {

  const [visibility, setVisiblility] = useState(false);
  return (
    <Modal
      centered={false}
      open={visibility}
      onClose={() => setVisiblility(false)}
      onOpen={() => setVisiblility(true)}
      trigger={<Button data-cy="login-btn">Login</Button>}
    >
      <Modal.Header data-cy="login-modal-header">Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your subscription has been confirmed
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setVisiblility(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LoginModal;
