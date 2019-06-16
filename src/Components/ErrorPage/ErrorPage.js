import React from 'react';
import './ErrorPage.css';
import {Link} from 'react-router-dom';

const ErrorPage = (props) => {
	return (
		<div className="ErrorPage text-center">
			<h1 className="error error-padding">Ohhh no, you've found our junior developer's homepage.</h1>
			<p className="error">Just go back <Link to="/" exact><i class="fas fa-house-damage er-icon"></i></Link></p>
		</div>
	);
}

export default ErrorPage;