import React, {useState} from 'react';
import { Button, Modal } from 'semantic-ui-react';

const BecomeSubscriber = ({setUpdate}) => {
  const [visibility, setVisibility] = useState();


  return (
    <Modal
    onOpen={() => setVisibility(true)}
    >
      <Button data-cy='become-subscriber'>
        Subscribe
      </Button>
    </Modal>
  );
}

export default BecomeSubscriber;
