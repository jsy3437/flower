import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Card from './components/containers/Card';
import Footer from './components/footer/footer';

function App() {
	return (
		<div className='app_container'>
			<Navbar />
			<Banner />
			<Card />
			<Footer />
			<div className='footer_copyright'>Copyright © 2020 OKKOT. ALL RIGHT RESERVED.</div>
		</div>
	);
}

export default App;
