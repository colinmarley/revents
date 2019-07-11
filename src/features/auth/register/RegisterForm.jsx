import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { registerUser } from '../authActions';

const actions = {
	registerUser,
};

const RegisterForm = ({ handleSubmit, registerUser }) => {
	return (
		<div>
			<Form size='large' onSubmit={handleSubmit(registerUser)}>
				<Segment>
					<Field
						name='displayName'
						type='text'
						component={TextInput}
						placeholder='Known As'
						autoComplete='off'
					/>
					<Field
						name='email'
						type='text'
						component={TextInput}
						placeholder='Email'
						autoComplete='off'
					/>
					<Field
						name='password'
						type='password'
						component={TextInput}
						placeholder='Password'
						autoComplete='off'
					/>
					<Button fluid size='large' color='teal'>
						Register
					</Button>
				</Segment>
			</Form>
		</div>
	);
};

export default connect(
	null,
	actions
)(reduxForm({ form: 'registerForm' })(RegisterForm));
