import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  Button,
  Form,
  Divider,
  Grid,
  Segment,
  Header,
  Menu,
} from 'semantic-ui-react';

const LoginModal = () => {
  const [visibility, setVisibility] = useState(false);
  const [renderForm, setRenderForm] = useState(false);

  const registerUser = async (event) => {
    event.preventDefault();
    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.passwordConfirmation.value,
    };

    try {
      let response = await axios.post('/api/auth', credentials);
      debugger
      const userCredentials = {
        uid: response.headers['uid'],
        client: response.headers['client'],
        access_token: response.headers['access-token'],
        expiry: response.headers['expiry'],
        token_type: 'Bearer',
      };

      localStorage.setItem('userData', JSON.stringify(userCredentials));
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu inverted>
      <Modal
        centered={false}
        open={visibility}
        onClose={() => setRenderForm(false)}
        onClose={() => {
          setVisibility(false);
        }}
        onOpen={() => setVisibility(true)}
        onOpen={() => setRenderForm(true)}
        open={renderForm}
        trigger={
          <Menu.Item position='right'>
            <Button data-cy='login-btn' color='red' inverted>
              Login/Register
            </Button>
          </Menu.Item>
        }
      >
        <Modal.Header data-cy='login-modal-header'></Modal.Header>
        <Modal.Content data-cy='login-modal-content'>
          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header as='h3'>Login</Header>
                  <Form>
                    <Form.Field widths={2}>
                      <Form.Inputflix
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
                    </Form.Field>
                    <Button
                      type='submit'
                      data-cy='form-login-btn'
                      onClick={() => setVisibility(false)}
                    >
                      Login
                    </Button>
                  </Form>
                </Grid.Column>
                <Grid.Column>
                  <Header>Register</Header>
                  <Form onSubmit={(event) => registerUser(event)}>
                    <Form.Field widths='equal'>
                      <Form.Input
                        fluid
                        type='email'
                        label='email'
                        name='email'
                        placeholder='email'
                        data-cy='registration-email-input'
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Input
                        fluid
                        type='password'
                        label='Password'
                        name='password'
                        placeholder='Password'
                        data-cy='registration-password'
                        // onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Form.Input
                        fluid
                        type='password'
                        label='Password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        data-cy='registration-confirmation-password'
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Form.Field>
                    <Button
                      type='submit'
                      data-cy='form-register-btn'
                      onClick={() => setVisibility(false)}
                    >
                      Register
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
    </Menu>
  );
};

export default LoginModal;
