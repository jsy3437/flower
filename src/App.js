import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Agree from './pages/Agree';
import Agree_id from './pages/Agree_id';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterSuccess from './pages/RegisterSuccess';
import EmailSearchPage from './pages/EmailSearchPage';
import PasswordSearchPage from './pages/PasswordSearchPage';
import Service from './pages/Service';
import Faq from './pages/Faq';
import Notice from './pages/Notice';
import Cart from './pages/Cart';

function App() {
	return (
		<Router>
			<div className='app_container'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/register' component={RegisterPage} />

					<Route exact path='/agree/:id' component={Agree_id} />
					<Route exact path='/agree' component={Agree} />
					<Route exact path='/register/success' component={RegisterSuccess} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/login/email/search' component={EmailSearchPage} />
					<Route exact path='/login/password/search' component={PasswordSearchPage} />
					<Route exact path='/service' component={Service} />
					<Route exact path='/notice' component={Notice} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/cart' component={Cart} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
