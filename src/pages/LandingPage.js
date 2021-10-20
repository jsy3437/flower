import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

function LandingPage() {
	return (
		<div>
			<Navbar />
			<Banner />
			<Card />
			<Footer />
			<div className='footer_copyright'>Copyright © 2020 OKKOT. ALL RIGHT RESERVED.</div>
		</div>
	);
}

export default LandingPage;
