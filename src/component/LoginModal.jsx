import React, { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

const LoginModal = () => {
	const [visibility, setVisibility] = useState(false)
	return (
		<Modal
			centered={false}
			open={visibility}
			onClose={() => setVisibility(false)}
			onOpen={() => setVisibility(true)}
			trigger={<Button data-cy='login-btn'>Login</Button>}>
			<Modal.Header data-cy='login-modal-header'>Login</Modal.Header>
			<Modal.Content data-cy='login-modal-content'>

    





				<Form>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							type='email'
							label='email'
							placeholder='email'
							data-cy='login-email-input'
							required
						/>
						<Form.Input
							fluid
							type='password'
							label='Password'
							placeholder='Password'
							data-cy='login-password'
							required
						/>
					</Form.Group>
					<Button
						type='submit'
						data-cy='form-login-btn'
						onClick={() => setVisibility(false)}>
						Login
					</Button>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setVisibility(false)}>Close</Button>
			</Modal.Actions>
		</Modal>
	)
}

export default LoginModal
