import React, { useState } from 'react';
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
								<Form onSubmit={(event) => BecomeSubscriber(event)}>
									<Form.Field widths={2}>
										<Form.Input
											fluid
											type='email'
											label='email'
											name='email'
											placeholder='email'
											data-cy='login-email-input'
											required
										/>
										<Form.Input
											fluid
											type='password'
											label='Password'
											name='password'
											placeholder='Password'
											data-cy='login-password'
											required
										/>
									</Form.Field>
									<Button type='submit' data-cy='subscribe-submit-btn'>
										Login
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

export default BecomeSubscriber;
