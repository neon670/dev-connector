import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ForgotPassword = props => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;
	const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
	const onSubmit = async e =>{
		e.preventDefault();
		// login(email, password)
		};



	return (
	<Fragment>	
      <h1 className='large text-primary'>Forgot Password</h1>
      <p className='lead'><i className='fas fa-user'></i> Submit your email to recover your password</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
        </div>

        <input type='submit' className='btn btn-primary' value='Reset' />
      </form>
      

    </Fragment>
	)
}

ForgotPassword.propTypes = {

}

export default ForgotPassword;