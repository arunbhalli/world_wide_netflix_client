import React, { useState } from 'react';

import {
	injectStripe,
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
  CardElement,
} from 'react-stripe-elements';
import {
	Button,
	Modal,
	Segment,
	Menu,
	Grid,
	Header,
	Form,
} from 'semantic-ui-react';

const BecomeSubscriber = ({ setUpdate }) => {
	const [visibility, setVisibility] = useState();


	const payWithStripe = async (event) => {
		event.preventDefault();
    let stripeResponse = stripe.createToken(CardElement)
	
	};

	return (
		<Modal
			centered={false}
			open={visibility}
			onClose={() => setVisibility(false)}
			onOpen={() => setVisibility(true)}
			trigger={
				<Menu.Item position='right'>
					<Button data-cy='subscribe-btn' color='red' inverted>
						Subscribe
					</Button>
				</Menu.Item>
			}>
			<Modal.Header data-cy='subscribe-modal-header'></Modal.Header>
			<Modal.Content data-cy='subscribe-modal-content'>
				<Segment placeholder>
					<Grid columns={2} stackable textAlign='center'>
						<Grid.Row verticalAlign='middle'>
							<Grid.Column>
								<Header as='h3'>Subscribe</Header>
								<Form
									data-cy='subscriber-form'
									onSubmit={(event) => payWithStripe(event)}>
									<div data-cy='card-number'>
										<label>Card Number</label>
										<CardNumberElement />
									</div>
									<div data-cy='expirydate'>
										<label>Expiry Date</label>
										<CardExpiryElement />
									</div>
									<div data-cy='cvc'>
										<label>CVC</label>
										<CardCVCElement />
									</div>
									<Button type='submit' data-cy='submit-payment'>
										Subscribe
									</Button>
								</Form>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setVisibility(false)}>Close</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default injectStripe(BecomeSubscriber);
