import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory()
  
 async function submit() {

  let item = {email, password, confirmPassword}
  console.warn(item)

  let result= await axios.post("http://localhost:3001/api/auth",{

    body: JSON.stringify(item),
    header:{
    "Content-Type":'application/json'},
    "Accept": 'application/json'
  })
  result =await result.json()
  localStorage.setItem("result",result)
  history.push("/add")
 }

  return (
    <Menu inverted>
      <Modal
        centered={false}
        open={visibility}
        onClose={() => setVisibility(false)}
        onOpen={() => setVisibility(true)}
        trigger={
          <Menu.Item position='right'>
            <Button data-cy='login-btn' color='red' inverted>
              Login/Register
            </Button>
          </Menu.Item>
        }>
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
                    </Form.Field>
                    <Button
                      type='submit'
                      data-cy='form-login-btn'
                      onClick={() => setVisibility(false)}>
                      Login
                    </Button>
                  </Form>
                </Grid.Column>
                <Grid.Column>
                  <Header>Register</Header>
                  <Form>
                    <Form.Field widths='equal'>
                      <Form.Input
                        fluid
                        type='email'
                        label='email'
                        placeholder='email'
                        data-cy='registration-email-input'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Input
                        fluid
                        type='password'
                        label='Password'
                        placeholder='Password'
                        data-cy='registration-password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Form.Input
                        fluid
                        type='password'
                        label='Password'
                        placeholder='Confirm Password'
                        data-cy='registration-confirmation-password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Form.Field>
                    <Button
                      type='submit'
                      data-cy='form-register-btn'
                      onClick={submit}
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
