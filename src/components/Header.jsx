import React from 'react';
import LoginModal from './LoginModal';
import { Header, Segment } from 'semantic-ui-react';
import BecomeSubscriber from './BecomeSubscriber';
import { Elements } from 'react-stripe-elements';

const HeaderMainPage = (props) => {
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
				<LoginModal setUpdate={props.setUpdate} />
				<Elements setStripe={props.setStripe}>
					<BecomeSubscriber setMessage={props.setMessage}/>
				</Elements>
			</Segment>
		</div>
	);
};

export default HeaderMainPage;
