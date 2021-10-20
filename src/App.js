
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterAgreePage from './pages/RegisterAgreePage';
import RegisterDataPage from './pages/RegisterDataPage';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterMainPage from './pages/RegisterMainPage';
import RegisterSuccess from './pages/RegisterSuccess';
import EmailSearchPage from './pages/EmailSearchPage';
import PasswordSearchPage from './pages/PasswordSearchPage';
import ServicePage from './pages/ServicePage';
import FaqPage from './pages/FaqPage';
import NoticePage from './pages/NoticePage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<Router>
			<div className='app_container'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/register' component={RegisterMainPage} />

					<Route exact path='/agree/:id' component={RegisterAgreePage} />
					<Route exact path='/agree' component={RegisterDataPage} />
					<Route exact path='/register/success' component={RegisterSuccess} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/login/email/search' component={EmailSearchPage} />
					<Route exact path='/login/password/search' component={PasswordSearchPage} />
					<Route exact path='/service' component={ServicePage} />
					<Route exact path='/notice' component={NoticePage} />
					<Route exact path='/faq' component={FaqPage} />
					<Route exact path='/cart' component={CartPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
