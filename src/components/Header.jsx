import React, {useState} from 'react';
import LoginModal from './LoginModal';
import { Header, Segment } from 'semantic-ui-react';
import BecomeSubscriber from './BecomeSubscriber';
import { Elements } from 'react-stripe-elements';

const HeaderMainPage = (props) => {
	const [authenticated, setAuthenticated] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div data-cy='header'>
      <Segment inverted style={{ borderRadius: 0 }}>
        <Header textAlign='center' size='huge' color='red' inverted>
          World Wide Netflix
        </Header>
        <Header textAlign='center'>
          Tired of watching the choice Netflix gives you, check out what is
          available around the globe!
        </Header>
        {!authenticated && <LoginModal subscribed={subscribed} setQuery={props.setQuery} setUpdate={props.setUpdate} setAuthenticated={setAuthenticated}/>}
        {(authenticated && !subscribed) && (
          <Elements>
            <BecomeSubscriber setMessage={props.setMessage} setSubscribed={setSubscribed}/>
          </Elements>
        )}
      </Segment>
    </div>
  );
};

export default HeaderMainPage;
