import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { login } from '../authActions';

const mapDispatch = {
	login
}

const LoginForm = ({login, handleSubmit, error}) => {
	return (
		<Form size='large' onSubmit={handleSubmit(login)} autoComplete='off' >
			<Segment>
				<Field
					name='email'
					component={TextInput}
					type='text'
					placeholder='Email Address'
				/>
				<Field
					name='password'
					component={TextInput}
					type='password'
					placeholder='Password'
				/>
				{error && <Label basic color='red'>{error}</Label>}
				<Button fluid size='large' color='teal'>
					Login
				</Button>
			</Segment>
		</Form>
	);
};

export default connect(null, mapDispatch)(reduxForm({ form: 'loginForm' })(LoginForm));
